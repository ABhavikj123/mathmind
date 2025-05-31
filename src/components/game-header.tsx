"use client"

import { Brain, Pause, XCircle } from "lucide-react"

interface GameHeaderProps {
  level: number
  playerName: string
  secondChance: boolean
  onPause: () => void
  onQuit: () => void
}

export default function GameHeader({ level, playerName, secondChance, onPause, onQuit }: GameHeaderProps) {
  const block = Math.ceil(level / 20)
  const section = Math.ceil((level % 20 || 20) / 5)
  const digitCount = block

  const levelWithinBlock = ((level - 1) % 20) + 1
  const operandCount = Math.min(11, Math.floor((levelWithinBlock + 1) / 2) + 1)

  const operationTypes = section

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Brain className="mr-2" size={24} />
          <div>
            <div className="flex items-center">
              <h2 className="text-lg font-bold">Level {level}</h2>
              {secondChance && (
                <span className="ml-2 text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">Second Try</span>
              )}
            </div>
            <p className="text-xs text-blue-100">Hello, {playerName}!</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="hidden sm:flex text-xs bg-white/20 rounded-md p-2 space-x-4">
            <div>
              <span className="opacity-70">Digits:</span> <span className="font-medium">{digitCount}</span>
            </div>
            <div>
              <span className="opacity-70">Operands:</span> <span className="font-medium">{operandCount}</span>
            </div>
            <div>
              <span className="opacity-70">Operations:</span> <span className="font-medium">{operationTypes}</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={onPause}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Pause game"
            >
              <Pause size={20} />
            </button>
            <button
              onClick={onQuit}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Quit game"
            >
              <XCircle size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
