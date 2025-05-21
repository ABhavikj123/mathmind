import { Brain } from "lucide-react"

interface LevelInfoProps {
  level: number
  playerName: string
  secondChance: boolean
}

export default function LevelInfo({ level, playerName, secondChance }: LevelInfoProps) {
  return (
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
  )
}
