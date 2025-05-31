"use client"

import { useEffect, useState } from "react"
import { getStoredName, getStoredLevel } from "@/lib/storage"
import { BarChart, Trophy } from "lucide-react"

export default function RecordsPage() {
  const [playerName, setPlayerName] = useState("")
  const [highestLevel, setHighestLevel] = useState(1)
  const [playTime, setPlayTime] = useState(0)
  const [startDate, setStartDate] = useState("")

  useEffect(() => {
    const name = getStoredName()
    const level = getStoredLevel()
    const playTimeData = localStorage.getItem("playTime") ?? "0"
    const startDateData = localStorage.getItem("startDate") ?? new Date().toISOString()

    setPlayerName(name)
    setHighestLevel(level)
    setPlayTime(parseInt(playTimeData, 10))
    setStartDate(startDateData)
  }, [])

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0
      ? `${hours} hour${hours !== 1 ? "s" : ""} ${mins} minute${mins !== 1 ? "s" : ""}`
      : `${mins} minute${mins !== 1 ? "s" : ""}`
  }

  const getLevelRangeProgress = (start: number, end: number) => {
    const progress = Math.max(0, Math.min(end - start + 1, highestLevel - start + 1))
    return {
      value: progress,
      percent: Math.min(100, (progress / (end - start + 1)) * 100),
    }
  }

  const totalPercent = Math.min(100, highestLevel)

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-8">Your Progress & Records</h1>

        {playerName ? (
          <>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold text-black dark:text-white mb-4">Player Profile</h2>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-24 h-24 flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                    {playerName.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{playerName}</h3>
                  <p className="text-black dark:text-gray-300">Playing since {formatDate(startDate)}</p>
                </div>
              </div>
            </div>

            <div className="gap-6 mb-8">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center mb-4">
                  <Trophy className="text-yellow-500 mr-2" size={24} />
                  <h3 className="text-lg font-semibold text-black dark:text-white">Highest Level</h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-blue-700 dark:text-blue-400 mb-2">{highestLevel}</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
                      style={{ width: `${totalPercent}%` }}
                    ></div>
                  </div>
                  <p className="text-black dark:text-gray-300 text-sm">{totalPercent}% complete</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center mb-4">
                <BarChart className="text-green-500 mr-2" size={24} />
                <h3 className="text-lg font-semibold text-black dark:text-white">Level Progress</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Beginner", range: [1, 20], color: "green" },
                  { label: "Intermediate", range: [21, 40], color: "blue" },
                  { label: "Advanced", range: [41, 60], color: "yellow" },
                  { label: "Expert", range: [61, 80], color: "orange" },
                  { label: "Master", range: [81, 100], color: "red" },
                ].map(({ label, range, color }) => {
                  const { value, percent } = getLevelRangeProgress(range[0], range[1])
                  return (
                    <div key={label}>
                      <div className="flex justify-between text-sm text-black dark:text-gray-300 mb-1">
                        <span>{label} (Levels {range[0]}-{range[1]})</span>
                        <span>{value}/{range[1] - range[0] + 1}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className={`bg-${color}-500 h-2.5 rounded-full`}
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">No Records Found</h2>
            <p className="text-black dark:text-gray-300 mb-6">Start playing to see your progress and records!</p>
            <a
              href="/game"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Start Playing
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
