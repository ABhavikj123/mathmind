"use client"

import { useEffect, useRef } from "react"

interface TimerProps {
  timeLeft: number
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>
  isRunning: boolean
  onTimerEnd: () => void
  totalTime: number
}

export default function Timer({ timeLeft, setTimeLeft, isRunning, onTimerEnd, totalTime }: TimerProps) {
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const lastUpdateTimeRef = useRef<number>(Date.now())

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }

      lastUpdateTimeRef.current = Date.now()

      timerRef.current = setInterval(() => {
        const now = Date.now()
        const deltaTime = (now - lastUpdateTimeRef.current) / 1000 
        lastUpdateTimeRef.current = now

        setTimeLeft((prevTime: number) => {
          const newTime = Math.max(0, prevTime - deltaTime)
          if (newTime <= 0) {
            if (timerRef.current) {
              clearInterval(timerRef.current)
            }
            onTimerEnd()
            return 0
          }
          return newTime
        })
      }, 100) 
    } else if (!isRunning && timerRef.current) {
      clearInterval(timerRef.current)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isRunning, timeLeft, setTimeLeft, onTimerEnd])

  const percentage = (timeLeft / totalTime) * 100

  const getColorClass = () => {
    if (percentage > 60) return "bg-green-500 dark:bg-green-600"
    if (percentage > 30) return "bg-yellow-500 dark:bg-yellow-600"
    return "bg-red-500 dark:bg-red-600"
  }

  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm text-black dark:text-white mb-1">
        <span>Time Remaining</span>
        <span className="font-medium">{Math.ceil(timeLeft)} seconds</span>
      </div>
      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${getColorClass()} transition-all duration-100 ease-linear`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
