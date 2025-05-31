"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { getStoredName } from "@/lib/storage"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function SettingsPage() {
  const [newName, setNewName] = useState("")
  const [nameChangeSuccess, setNameChangeSuccess] = useState(false)
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false)

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const name = getStoredName()
    setNewName(name)
  }, [])

  const handleNameChange = (e: React.FormEvent) => {
    e.preventDefault()
    if (newName.trim()) {
      localStorage.setItem("playerName", newName)
      setNameChangeSuccess(true)
      setTimeout(() => setNameChangeSuccess(false), 3000)
    }
  }

  const handleDarkModeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleResetProgress = () => {
    localStorage.removeItem("currentLevel")
    localStorage.removeItem("playTime")
    setResetConfirmOpen(false)
    window.location.href = "/game"
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-8">Settings</h1>

        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">Profile Settings</h2>

            <form onSubmit={handleNameChange} className="space-y-4">
              <div>
                <label htmlFor="playerName" className="block text-sm font-medium text-black dark:text-white mb-1">
                  Player Name
                </label>
                <input
                  type="text"
                  id="playerName"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-black dark:text-white"
                  placeholder="Enter your name"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Update Name
                </button>
              </div>

              {nameChangeSuccess && (
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-4 py-2 rounded-md">
                  Name updated successfully!
                </div>
              )}
            </form>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">Game Settings</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {theme === "dark" ? (
                    <Moon className="text-blue-600 dark:text-blue-400 mr-3" size={20} />
                  ) : (
                    <Sun className="text-yellow-500 mr-3" size={20} />
                  )}
                  <span className="text-black dark:text-white">Dark Mode</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={theme === "dark"}
                    onChange={handleDarkModeToggle}
                  />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">Data Management</h2>

            <div className="space-y-4">
              <p className="text-black dark:text-white text-sm">
                Reset your game progress if you want to start over. This action cannot be undone.
              </p>

              {!resetConfirmOpen ? (
                <button
                  onClick={() => setResetConfirmOpen(true)}
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Reset Progress
                </button>
              ) : (
                <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 p-4 rounded-md">
                  <p className="text-red-700 dark:text-red-300 font-medium mb-3">
                    Are you sure you want to reset all progress?
                  </p>
                  <div className="flex space-x-3">
                    <button
                      onClick={handleResetProgress}
                      className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      Yes, Reset
                    </button>
                    <button
                      onClick={() => setResetConfirmOpen(false)}
                      className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
