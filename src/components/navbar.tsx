"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Brain, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Play", path: "/game" },
    { name: "Records", path: "/records" },
    { name: "Settings", path: "/settings" },
    { name: "Contact", path: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md" : "bg-white dark:bg-gray-900 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
        
          <Link href="/" className="flex items-center">
            <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="ml-2 text-xl font-bold text-black dark:text-white">MathMind</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(item.path)
                    ? "bg-blue-100 dark:bg-blue-900/50 text-black dark:text-white"
                    : "text-black dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/30"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-md text-black dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/30"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link
              href="/game"
              className={`ml-4 px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white`}
            >
              Play Now
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-2">
           
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-black dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/30"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/30 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? "bg-blue-100 dark:bg-blue-900/50 text-black dark:text-white"
                    : "text-black dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/30"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/game"
              className={`block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white`}
              onClick={() => setIsMenuOpen(false)}
            >
              Play Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
