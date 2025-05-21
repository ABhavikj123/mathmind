"use client"

import { Play, Home } from "lucide-react"

interface PauseGameModalProps {
  onResume: () => void
  onQuit: () => void
  playerName: string
  level: number
}

export default function PauseGameModal({ onResume, onQuit, playerName, level }: PauseGameModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden max-w-md w-full border border-gray-200 dark:border-gray-800">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <h2 className="text-2xl font-bold text-center">Game Paused</h2>
        </div>

        <div className="p-8 text-center">
          <div className="mb-6">
            <p className="text-lg text-black dark:text-white">
              Hi, <span className="font-semibold">{playerName}</span>!
            </p>
            <p className="text-black dark:text-white mt-2">
              You're currently on <span className="font-bold text-blue-600 dark:text-blue-400">Level {level}</span>
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={onResume}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <Play size={20} className="mr-2" />
              Resume Game
            </button>

            <button
              onClick={onQuit}
              className="w-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-black dark:text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <Home size={20} className="mr-2" />
              Return to Main Menu
            </button>
          </div>

          <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">Your progress has been saved automatically.</p>
        </div>
      </div>
    </div>
  )
}
