"use client"

import type React from "react"
import { useState } from "react"
import { savePlayerName } from "@/lib/storage"
import { ArrowRight, Brain, Trophy } from "lucide-react"

interface StartScreenProps {
  onStart: (name: string) => void
  initialName: string
  initialLevel: number
}

export default function StartScreen({ onStart, initialName, initialLevel }: StartScreenProps) {
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
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
        <div className="flex items-center justify-center mb-4">
          <Brain size={40} className="mr-2" />
          <h1 className="text-3xl font-bold">Math Memory</h1>
        </div>
        <p className="text-center text-purple-100">Challenge your brain with 100 levels of math puzzles</p>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-purple-800">
            {initialName ? `Welcome back, ${initialName}!` : "Welcome!"}
          </h2>
          {initialLevel > 1 && (
            <div className="flex items-center bg-purple-100 p-2 rounded-lg">
              <Trophy className="text-purple-600 mr-2" size={20} />
              <p className="text-purple-800">
                You reached <span className="font-bold">Level {initialLevel}</span>
              </p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="playerName" className="block text-sm font-medium text-gray-700">
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your name"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center"
          >
            {initialLevel > 1 ? "Continue Game" : "Start Game"}
            <ArrowRight className="ml-2" size={18} />
          </button>
        </form>

        <div className="mt-8 space-y-4">
          <div>
            <h3 className="font-semibold text-purple-800 mb-2 flex items-center">
              <span className="bg-purple-600 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2 text-sm">
                ?
              </span>
              How to Play
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Watch the sequence of numbers and operations carefully</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Calculate the result from left to right</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Enter your answer before the timer runs out</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Complete all 100 levels to master the challenge</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
