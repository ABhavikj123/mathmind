'use client'
import Link from "next/link"
import { Brain, Github, Heart, Twitter,AtSign } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-1">
            <div className="flex items-center">
              <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-lg font-bold text-black dark:text-white">MathMind</span>
            </div>
            <p className="mt-2 text-sm text-black dark:text-white">
              Challenge your brain with 100 levels of arithmetic memory puzzles.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white uppercase tracking-wider">Quick Links</h3>
            <div className="mt-4 space-y-2">
              <Link
                href="/"
                className="text-sm text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block"
              >
                Home
              </Link>
              <Link
                href="/game"
                className="text-sm text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block"
              >
                Play Game
              </Link>
              <Link
                href="/records"
                className="text-sm text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block"
              >
                Records
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white uppercase tracking-wider">Resources</h3>
            <div className="mt-4 space-y-2">
              <Link
                href="/settings"
                className="text-sm text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block"
              >
                Settings
              </Link>
              <Link
                href="/contact"
                className="text-sm text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block"
              >
                Contact Us
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white uppercase tracking-wider">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://x.com/BhavikJoshi7738?t=LoLtZqEyG8UYbYKt2aaDYw&s=08"
                className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://github.com/ABhavikj123/mathmind"
                className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="mailto:bhavikjoshi8989@gmail.com"
                className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AtSign className="h-5 w-5" />
                <span className="sr-only">Mail</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-black dark:text-white">
            &copy; {new Date().getFullYear()} MathMind. All rights reserved.
          </p>
          <p className="text-sm text-black dark:text-white mt-2 md:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by MathMind Team
          </p>
        </div>
      </div>
    </footer>
  )
}
