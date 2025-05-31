"use client"

import { useEffect, useState } from "react"
import { Brain, Play } from "lucide-react"

interface WelcomeBackModalProps {
  playerName: string
  level: number
  onContinue: () => void
}

export default function WelcomeBackModal({ playerName, level, onContinue }: WelcomeBackModalProps) {
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    if (countdown === 0) return
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [countdown])

  useEffect(() => {
    if (countdown === 0) {
      onContinue()
    }
  }, [countdown, onContinue])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden max-w-md w-full border border-gray-200 dark:border-gray-800">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <div className="flex items-center justify-center mb-4">
            <Brain size={32} className="mr-2" />
            <h1 className="text-2xl font-bold">MathMind</h1>
          </div>
        </div>

        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Welcome Back, {playerName}!</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
            <p className="text-black dark:text-white">
              You'll continue from <span className="font-bold text-blue-600 dark:text-blue-400">Level {level}</span>
            </p>
          </div>

          <div className="mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mx-auto">
              <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{countdown}</span>
            </div>
            <p className="text-sm text-black dark:text-gray-300 mt-2">Game starting in {countdown} seconds...</p>
          </div>

          <button
            onClick={onContinue}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
          >
            <Play size={20} className="mr-2" />
            Start Now
          </button>
        </div>
      </div>
    </div>
  )
}