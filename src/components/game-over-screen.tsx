"use client"

import { Trophy, RotateCcw, Home } from "lucide-react"

interface GameOverScreenProps {
  playerName: string
  level: number
  onPlayAgain: () => void
  onQuit: () => void
}

export default function GameOverScreen({ playerName, level, onPlayAgain, onQuit }: GameOverScreenProps) {
  const isGameCompleted = level > 100

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white text-center">
        <div className="flex justify-center mb-3">
          <Trophy size={40} />
        </div>
        <h2 className="text-2xl font-bold">{isGameCompleted ? "Congratulations!" : "Game Over"}</h2>
      </div>

      <div className="p-8 text-center">
        <div className="mb-6">
          <p className="text-lg text-gray-700">
            {isGameCompleted
              ? `Amazing job, ${playerName}! You've completed all 100 levels!`
              : `Well done, ${playerName}!`}
          </p>
          <p className="text-gray-600 mt-2">
            You reached <span className="font-bold text-purple-700">Level {level}</span>
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={onPlayAgain}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
          >
            <RotateCcw size={20} className="mr-2" />
            {isGameCompleted ? "Play Again" : "Try Again"}
          </button>

          <button
            onClick={onQuit}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
          >
            <Home size={20} className="mr-2" />
            Return to Main Menu
          </button>
        </div>
      </div>
    </div>
  )
}
