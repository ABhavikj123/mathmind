"use client"

import type React from "react"
import Timer from "@/components/timer"

interface GameContentProps {
  gamePhase: "showing" | "answering" | "feedback"
  currentElement: number | string | null
  timeLeft: number
  totalTime: number
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>
  isTimerRunning: boolean
  onTimerEnd: () => void
  userAnswer: string
  setUserAnswer: (answer: string) => void
  handleSubmit: (e: React.FormEvent) => void
  feedback: {
    message: string
    isCorrect: boolean
    showSteps: boolean
  } | null
  problem: {
    elements: (number | string)[]
    answer: number
    steps: string[]
  } | null
  inputRef: React.RefObject<HTMLInputElement | null>;
}

export default function GameContent({
  gamePhase,
  currentElement,
  timeLeft,
  totalTime,
  setTimeLeft,
  isTimerRunning,
  onTimerEnd,
  userAnswer,
  setUserAnswer,
  handleSubmit,
  feedback,
  problem,
  inputRef,
}: GameContentProps) {
  return (
    <div className="p-6">
      <div className="min-h-[300px] flex flex-col items-center justify-center">
        {gamePhase === "showing" && (
          <div className="text-center">
            {currentElement === null ? (
              <div className="flex flex-col items-center justify-center h-40">
                <div className="w-12 h-12 border-4 border-blue-500 dark:border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-black dark:text-white">Preparing problem...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <p className="text-sm text-black dark:text-white mb-4">Remember this sequence:</p>
                <div className="bg-blue-100 dark:bg-blue-900/50 rounded-lg p-8 min-w-[120px] min-h-[120px] flex items-center justify-center mb-4">
                  <span className="text-5xl font-mono font-bold text-black dark:text-white">{currentElement}</span>
                </div>
                <div className="flex space-x-1 mt-2">
                  {problem?.elements.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentElement ? "bg-blue-600 dark:bg-blue-400" : "bg-gray-200 dark:bg-gray-700"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {gamePhase === "answering" && (
          <div className="w-full space-y-6">
            <Timer
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              isRunning={isTimerRunning}
              onTimerEnd={onTimerEnd}
              totalTime={totalTime}
            />

            <div className="text-center mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-900 mb-4">
                <p className="text-xl font-medium text-black dark:text-white">
                  What is the answer to the sequence you just saw?
                </p>
              </div>
              <p className="text-sm text-black dark:text-white">
                Calculate from left to right, following the order of operations shown.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  ref={inputRef}
                  type="number"
                  id="answer"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-center text-2xl font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-black dark:text-white"
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
            className={`w-full p-6 rounded-lg ${
              feedback.isCorrect
                ? "bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800"
                : "bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800"
            }`}
          >
            <p
              className={`text-xl font-medium mb-4 ${
                feedback.isCorrect ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"
              }`}
            >
              {feedback.message}
            </p>

            {feedback.showSteps && problem && (
              <div className="mt-4">
                <p className="font-medium text-black dark:text-white mb-2">Calculation steps:</p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-700">
                  <ul className="space-y-3 font-mono text-sm">
                    {problem.steps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-black dark:text-white flex items-center justify-center mr-2 text-xs font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-black dark:text-white">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
