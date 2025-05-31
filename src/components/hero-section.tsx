'use client'
import Link from "next/link"
import { ArrowRight, Brain, CheckCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-200 dark:from-blue-900 dark:via-indigo-900 dark:to-gray-950 transition-colors duration-500 overflow-hidden">
      
      <svg
        className="absolute left-0 top-0 w-[500px] h-[500px] opacity-40 dark:opacity-30 blur-2xl pointer-events-none"
        viewBox="0 0 500 500"
        aria-hidden
      >
        <circle cx="250" cy="250" r="200" fill="#6366F1" fillOpacity="0.15" />
        <circle cx="350" cy="150" r="100" fill="#60A5FA" fillOpacity="0.12" />
      </svg>

      <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col md:flex-row items-center gap-12">
       
        <div className="md:w-1/2 flex flex-col items-start bg-white/80 dark:bg-gray-900/70 backdrop-blur-md rounded-3xl shadow-xl p-10 md:p-12 border border-blue-200 dark:border-blue-900">
          <div className="flex items-center mb-6">
            <Brain size={40} className="mr-4 text-indigo-500 dark:text-blue-300 drop-shadow" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white drop-shadow-lg">
              MathMind
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-indigo-700 dark:text-blue-200">
            Challenge Your Brain with Arithmetic Memory Puzzles
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-blue-100 mb-8 max-w-xl">
            Test your mental math skills with 100 levels of increasing difficulty. Remember the sequence, calculate the result, and train your brain!
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-indigo-400 dark:text-blue-300 mr-2" />
              100 progressively challenging levels
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-indigo-400 dark:text-blue-300 mr-2" />
              Train memory and arithmetic skills
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-indigo-400 dark:text-blue-300 mr-2" />
              Track your progress and improve
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Link
              href="/game"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-7 rounded-lg shadow transition-colors flex items-center justify-center"
            >
              Play Now
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              href="#how-to-play"
              className="bg-indigo-100 hover:bg-indigo-200 dark:bg-blue-900/60 dark:hover:bg-blue-900 text-indigo-700 dark:text-blue-100 font-bold py-3 px-7 rounded-lg transition-colors flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-blue-100/30 dark:border-blue-900/40">
              <div className="bg-indigo-500 dark:bg-blue-700 p-4 text-white">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Brain size={24} className="mr-2" />
                    <h3 className="font-bold">Level 42</h3>
                  </div>
                  <div className="text-xs bg-indigo-400 dark:bg-blue-600 bg-opacity-50 px-2 py-1 rounded-full">3-digit numbers</div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6 text-center">
                  <div className="bg-indigo-100 dark:bg-blue-900/30 rounded-lg p-8 mb-4">
                    <span className="text-5xl font-mono font-bold text-gray-900 dark:text-white">7</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Remember the sequence...</p>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-6">
                  <div className="bg-green-500 h-2.5 rounded-full w-3/4"></div>
                </div>
                <div className="text-center text-gray-700 dark:text-gray-300 text-sm">
                  <p>Time remaining: 8 seconds</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}