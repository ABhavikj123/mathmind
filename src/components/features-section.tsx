'use client'
import { Brain, ChevronUp, Clock, Gauge, Layers, Trophy } from "lucide-react"

export default function FeaturesSection() {
  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Game Features</h2>
          <p className="text-lg text-black dark:text-gray-300 max-w-2xl mx-auto">
            MathMind combines memory challenges with arithmetic problems to create a unique brain training experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Layers className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">100 Progressive Levels</h3>
            <p className="text-black dark:text-gray-300">
              Start with simple 1-digit addition and work your way up to complex 5-digit calculations with multiple
              operations.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Brain className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">Memory Challenge</h3>
            <p className="text-black dark:text-gray-300">
              Each problem is shown one element at a time. Remember the sequence, then calculate the answer.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Gauge className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">Adaptive Difficulty</h3>
            <p className="text-black dark:text-gray-300">
              The game adjusts to your skill level. Succeed to advance, or drop back a level if you need more practice.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Clock className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">Time Pressure</h3>
            <p className="text-black dark:text-gray-300">
              Race against the clock with a timer that adjusts based on problem complexity. Think fast!
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <ChevronUp className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">Skill Building</h3>
            <p className="text-black dark:text-gray-300">
              Improve mental math abilities, working memory, and concentration with regular practice.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Trophy className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">Progress Tracking</h3>
            <p className="text-black dark:text-gray-300">
              Track your highest level, play time, and improvement over time with detailed statistics.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
