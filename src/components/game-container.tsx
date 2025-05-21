"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { generateProblem } from "@/lib/problem-generator"
import { saveCurrentLevel } from "@/lib/storage"
import GameHeader from "@/components/game-header"
import GameContent from "@/components/game-content"

interface GameContainerProps {
  playerName: string
  currentLevel: number
  setCurrentLevel: (level: number) => void
  gameState: string
  onPause: () => void
  onGameOver: () => void
}

export default function GameContainer({
  playerName,
  currentLevel,
  setCurrentLevel,
  gameState,
  onPause,
  onGameOver,
}: GameContainerProps) {
  const [level, setLevel] = useState(currentLevel)
  const [problem, setProblem] = useState<{
    elements: (number | string)[]
    answer: number
    steps: string[]
  } | null>(null)
  const [currentElementIndex, setCurrentElementIndex] = useState(-1)
  const [userAnswer, setUserAnswer] = useState("")
  const [feedback, setFeedback] = useState<{
    message: string
    isCorrect: boolean
    showSteps: boolean
  } | null>(null)
  const [secondChance, setSecondChance] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [totalTime, setTotalTime] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [gamePhase, setGamePhase] = useState<"showing" | "answering" | "feedback">("showing")
  const [currentElement, setCurrentElement] = useState<number | string | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const sequenceTimerRef = useRef<NodeJS.Timeout | null>(null)
  const previousGameStateRef = useRef<string>(gameState)

  
  // Handle game state changes
  useEffect(() => {
    if (gameState === "playing" && previousGameStateRef.current !== "playing") {
      // Game was just started or resumed
      if (gamePhase === "showing") {
        generateNewProblem()
      } else if (gamePhase === "answering") {
        setIsTimerRunning(true)
      }
      setIsPaused(false)
    } else if (gameState === "paused" && previousGameStateRef.current === "playing") {
      // Game was just paused
      if (sequenceTimerRef.current) {
        clearTimeout(sequenceTimerRef.current)
      }
      setIsTimerRunning(false)
      setIsPaused(true)
    }

    previousGameStateRef.current = gameState
  }, [gameState, gamePhase])

  // Generate a new problem when level changes or after feedback
  useEffect(() => {
    if (gameState === "playing" && gamePhase === "showing" && !isPaused) {
      generateNewProblem()
    }
  }, [level, gamePhase, gameState, isPaused])

  // Save level to local storage when it changes
  useEffect(() => {
    saveCurrentLevel(level)
    setCurrentLevel(level)
  }, [level, setCurrentLevel])

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (sequenceTimerRef.current) {
        clearTimeout(sequenceTimerRef.current)
      }
    }
  }, [])

  const generateNewProblem = () => {
    const newProblem = generateProblem(level)
    setProblem(newProblem)
    setUserAnswer("")
    setFeedback(null)
    setCurrentElementIndex(-1)
    setCurrentElement(null)

    // Start showing the sequence
    showNextElement(0, newProblem.elements)
  }

  const showNextElement = (index: number, elements: (number | string)[]) => {
    if (isPaused) return

    if (index >= elements.length) {
      // Sequence complete, move to answering phase
      setCurrentElement(null)
      setGamePhase("answering")

      // Calculate timer duration: 5 seconds + 2 seconds per operand
      const operandCount = Math.ceil(elements.length / 2)
      const timerDuration = 5 + (operandCount - 1) * 2
      setTimeLeft(timerDuration)
      setTotalTime(timerDuration)
      setIsTimerRunning(true)

      // Focus the input field
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }, 100)

      return
    }

    // Show current element
    setCurrentElementIndex(index)
    setCurrentElement(elements[index])

    // Schedule next element
    sequenceTimerRef.current = setTimeout(() => {
      showNextElement(index + 1, elements)
    }, 1000)
  }

  const handleTimerEnd = () => {
    setIsTimerRunning(false)
    checkAnswer(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsTimerRunning(false)
    checkAnswer(false)
  }

  const checkAnswer = (timedOut: boolean) => {
    if (!problem) return

    const userAnswerNum = userAnswer ? Number.parseInt(userAnswer, 10) : null
    const isCorrect = userAnswerNum === problem.answer

    let message = ""

    if (timedOut && !userAnswer) {
      message = `Time's up, ${playerName}! The answer is ${problem.answer}.`
    } else if (isCorrect) {
      message = `Well done, ${playerName}! That's correct!`
    } else {
      message = `Sorry, ${playerName}, the answer is ${problem.answer}.`
    }

    setFeedback({
      message,
      isCorrect,
      showSteps: !isCorrect || timedOut,
    })

    setGamePhase("feedback")

    // Handle level progression or second chance
    setTimeout(() => {
      if (isCorrect) {
        // Move to next level
        setLevel((prev) => {
          const newLevel = prev + 1
          if (newLevel > 100) {
            onGameOver()
            return prev
          }
          return newLevel
        })
        setSecondChance(false)
      } else if (!secondChance) {
        // Give a second chance
        setSecondChance(true)
      } else {
        // Drop one level (minimum 1) after failing second chance
        setLevel((prev) => Math.max(1, prev - 1))
        setSecondChance(false)
      }

      setGamePhase("showing")
    }, 3000)
  }

  if (!playerName || gameState === "loading" || gameState === "welcome" || gameState === "start") {
    return null
  }

  return (
    <div className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
      <GameHeader
        level={level}
        playerName={playerName}
        secondChance={secondChance}
        onPause={onPause}
        onQuit={onGameOver}
      />

      <GameContent
        gamePhase={gamePhase}
        currentElement={currentElement}
        timeLeft={timeLeft}
        totalTime={totalTime}
        setTimeLeft={setTimeLeft}
        isTimerRunning={isTimerRunning && gameState === "playing"}
        onTimerEnd={handleTimerEnd}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
        handleSubmit={handleSubmit}
        feedback={feedback}
        problem={problem}
        inputRef={inputRef}
      />
    </div>
  )
}
