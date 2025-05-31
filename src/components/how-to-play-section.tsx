'use client'
import { ArrowRight } from "lucide-react"

export default function HowToPlaySection() {
  return (
    <div id="how-to-play" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">How To Play</h2>
          <p className="text-lg text-black dark:text-gray-300 max-w-2xl mx-auto">
            MathMind is easy to learn but challenging to master. Follow these simple steps to get started.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 mt-2">Watch Carefully</h3>
              <p className="text-black dark:text-gray-300 mb-4">
                Pay close attention as numbers and operations appear on screen one at a time.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 flex justify-center">
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-100 dark:bg-blue-800/50 rounded p-2 w-12 h-12 flex items-center justify-center">
                    <span className="text-xl font-mono font-bold text-black dark:text-white">5</span>
                  </div>
                  <ArrowRight className="text-blue-400 dark:text-blue-500" size={20} />
                  <div className="bg-blue-100 dark:bg-blue-800/50 rounded p-2 w-12 h-12 flex items-center justify-center">
                    <span className="text-xl font-mono font-bold text-black dark:text-white">+</span>
                  </div>
                  <ArrowRight className="text-blue-400 dark:text-blue-500" size={20} />
                  <div className="bg-blue-100 dark:bg-blue-800/50 rounded p-2 w-12 h-12 flex items-center justify-center">
                    <span className="text-xl font-mono font-bold text-black dark:text-white">3</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 mt-2">Calculate</h3>
              <p className="text-black dark:text-gray-300 mb-4">
                Solve the problem from left to right, following the order of operations shown.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                <div className="text-center">
                  <p className="text-sm text-black dark:text-gray-300 mb-2">For example:</p>
                  <p className="font-mono font-bold text-black dark:text-white">(5 + 3) × 2 = 16</p>
                  <p className="text-xs text-black dark:text-gray-400 mt-2">Calculate from left to right</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 mt-2">Answer Quickly</h3>
              <p className="text-black dark:text-gray-300 mb-4">
                Enter your answer before the timer runs out to advance to the next level.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                <div className="text-center">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-3">
                    <div className="bg-green-500 h-2.5 rounded-full w-1/2"></div>
                  </div>
                  <p className="text-sm text-black dark:text-gray-300">Time is ticking!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
