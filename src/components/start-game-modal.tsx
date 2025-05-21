"use client"

import type React from "react"
import { useState } from "react"
import { savePlayerName } from "@/lib/storage"
import { ArrowRight, Brain } from "lucide-react"

interface StartGameModalProps {
  onStart: (name: string) => void
  initialName: string
  initialLevel: number
}

export default function StartGameModal({ onStart, initialName, initialLevel }: StartGameModalProps) {
  const [name, setName] = useState(initialName || "")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) {
      setError("Please enter your name")
      return
    }

    savePlayerName(name)
    onStart(name)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden max-w-md w-full border border-gray-200 dark:border-gray-800">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <div className="flex items-center justify-center mb-4">
            <Brain size={32} className="mr-2" />
            <h1 className="text-2xl font-bold">MathMind</h1>
          </div>
          <p className="text-center text-blue-100">Challenge your brain with math puzzles</p>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
              {initialName ? `Welcome back, ${initialName}!` : "Welcome!"}
            </h2>
            {initialLevel > 1 && (
              <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg text-center">
                <p className="text-black dark:text-white">
                  You'll continue from <span className="font-bold">Level {initialLevel}</span>
                </p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="playerName" className="block text-sm font-medium text-black dark:text-white">
                Your Name
              </label>
              <input
                type="text"
                id="playerName"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  setError("")
                }}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-black dark:text-white"
                placeholder="Enter your name"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center"
            >
              {initialLevel > 1 ? "Continue Game" : "Start Game"}
              <ArrowRight className="ml-2" size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
