"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { generateProblem } from "@/lib/problem-generator"
import { saveCurrentLevel } from "@/lib/storage"
import Timer from "@/components/timer"
import LevelInfo from "@/components/level-info"
import { Pause, XCircle } from "lucide-react"

interface GameScreenProps {
  playerName: string
  initialLevel: number
  setCurrentLevel: (level: number) => void
  onPause: () => void
  onGameOver: () => void
}

type GamePhase = "showing" | "answering" | "feedback"

export default function GameScreen({
  playerName,
  initialLevel,
  setCurrentLevel,
  onPause,
  onGameOver,
}: GameScreenProps) {
  const [level, setLevel] = useState(initialLevel)
  const [problem, setProblem] = useState<{
    elements: (number | string)[]
    answer: number
    steps: string[]
  } | null>(null)
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
  const [gamePhase, setGamePhase] = useState<GamePhase>("showing")
  const [currentElement, setCurrentElement] = useState<number | string | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)
  const sequenceTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (gamePhase === "showing") {
      generateNewProblem()
    }
  }, [level, gamePhase])

  useEffect(() => {
    saveCurrentLevel(level)
    setCurrentLevel(level)
  }, [level, setCurrentLevel])

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
    setCurrentElement(null)

    showNextElement(0, newProblem.elements)
  }

  const showNextElement = (index: number, elements: (number | string)[]) => {
    if (index >= elements.length) {
      setCurrentElement(null)
      setGamePhase("answering")

      const operandCount = Math.ceil(elements.length / 2)
      const timerDuration = 5 + (operandCount - 1) * 2
      setTimeLeft(timerDuration)
      setTotalTime(timerDuration)
      setIsTimerRunning(true)

      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }, 100)

      return
    }

    setCurrentElement(elements[index])

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

    setTimeout(() => {
      if (isCorrect) {
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
        
        setSecondChance(true)
      } else {
        setLevel((prev) => Math.max(1, prev - 1))
        setSecondChance(false)
      }

      setGamePhase("showing")
    }, 3000)
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
        <div className="flex justify-between items-center">
          <LevelInfo level={level} playerName={playerName} secondChance={secondChance} />

          <div className="flex space-x-2">
            <button
              onClick={onPause}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Pause game"
            >
              <Pause size={20} />
            </button>
            <button
              onClick={onGameOver}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Quit game"
            >
              <XCircle size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6 min-h-[150px] flex flex-col items-center justify-center">
          {gamePhase === "showing" && (
            <div className="text-center">
              {currentElement === null ? (
                <p className="text-black dark:text-white">Preparing problem...</p>
              ) : (
                <div className="flex flex-col items-center">
                  <p className="text-sm text-black dark:text-white mb-2">Remember this sequence:</p>
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 min-w-[100px] min-h-[100px] flex items-center justify-center">
                    <span className="text-4xl font-mono font-bold text-black dark:text-white">{currentElement}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {gamePhase === "answering" && (
            <div className="w-full space-y-4">
              <Timer
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
                isRunning={isTimerRunning}
                onTimerEnd={handleTimerEnd}
                totalTime={totalTime}
              />

              <div className="text-center mb-4">
                <p className="text-sm text-black dark:text-white mb-2">Calculate the result:</p>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                  <p className="text-lg font-medium text-black dark:text-white">
                    What is the answer to the sequence you just saw?
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    ref={inputRef}
                    type="number"
                    id="answer"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-center text-xl font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-black dark:text-white"
                    placeholder="Enter your answer"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!userAnswer}
                >
                  Submit Answer
                </button>
              </form>
            </div>
          )}

          {gamePhase === "feedback" && feedback && (
            <div
              className={`w-full p-5 rounded-lg ${
                feedback.isCorrect
                  ? "bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800"
                  : "bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800"
              }`}
            >
              <p
                className={`text-lg font-medium ${
                  feedback.isCorrect ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"
                }`}
              >
                {feedback.message}
              </p>

              {feedback.showSteps && problem && (
                <div className="mt-4">
                  <p className="font-medium text-black dark:text-white mb-2">Calculation steps:</p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
                    <ul className="space-y-2 font-mono text-sm">
                      {problem.steps.map((step, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-black dark:text-white flex items-center justify-center mr-2 text-xs font-bold">
                            {index + 1}
                          </span>
                          <span className="text-black dark:text-white">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {secondChance && !feedback.isCorrect && (
                <p className="mt-3 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 p-2 rounded">
                  You'll get one more chance at this level!
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
