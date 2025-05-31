"use client"

import { ArrowLeftRight, Brain, ChevronLeft, ChevronRight, Clock, Info, Settings } from "lucide-react"
import Link from "next/link"

interface GameSidebarProps {
  isVisible: boolean
  playerName: string
  level: number
  onToggle: () => void
}

export default function GameSidebar({ isVisible, playerName, level, onToggle }: GameSidebarProps) {
  
  const progressPercentage = (level / 100) * 100

  return (
    <>
      <button
        onClick={onToggle}
        className="md:hidden fixed left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-r-md shadow-md z-10"
        aria-label={isVisible ? "Hide sidebar" : "Show sidebar"}
      >
        {isVisible ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>

      <div
        className={`fixed md:static inset-y-0 left-0 z-20 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto transition-all duration-300 ${
          isVisible ? "w-64" : "w-0"
        } md:w-64`}
      >
        <div className="p-4">
          
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Brain className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <h2 className="font-bold text-black dark:text-white">MathMind</h2>
              </div>
              <button
                onClick={onToggle}
                className="md:hidden text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="Hide sidebar"
              >
                <ArrowLeftRight size={18} />
              </button>
            </div>

            {playerName && (
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-black dark:text-white">Player:</p>
                <p className="font-medium text-blue-600 dark:text-blue-400">{playerName}</p>
              </div>
            )}
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium text-black dark:text-white mb-2">Your Progress</h3>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full h-2.5 mb-2">
              <div
                className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-black dark:text-white">
              <span>Level {level}</span>
              <span>{progressPercentage.toFixed(0)}%</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-black dark:text-white mb-2">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/records"
                className="flex items-center p-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Clock className="mr-2" size={18} />
                <span className="text-sm">View Records</span>
              </Link>
              <Link
                href="/settings"
                className="flex items-center p-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Settings className="mr-2" size={18} />
                <span className="text-sm">Settings</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center p-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Info className="mr-2" size={18} />
                <span className="text-sm">Help & Support</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
