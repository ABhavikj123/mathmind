"use client"

import { Play, Home } from "lucide-react"

interface PauseScreenProps {
  onResume: () => void
  onQuit: () => void
  playerName: string
  level: number
}

export default function PauseScreen({ onResume, onQuit, playerName, level }: PauseScreenProps) {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
        <h2 className="text-2xl font-bold text-center">Game Paused</h2>
      </div>

      <div className="p-8 text-center">
        <div className="mb-6">
          <p className="text-lg text-gray-700">
            Hi, <span className="font-semibold">{playerName}</span>!
          </p>
          <p className="text-gray-600 mt-2">
            You're currently on <span className="font-bold text-purple-700">Level {level}</span>
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={onResume}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
          >
            <Play size={20} className="mr-2" />
            Resume Game
          </button>

          <button
            onClick={onQuit}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
          >
            <Home size={20} className="mr-2" />
            Return to Main Menu
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-500">Your progress has been saved automatically.</p>
      </div>
    </div>
  )
}
