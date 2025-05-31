"use client"

import { useEffect, useState } from "react"
import { getStoredLevel, getStoredName } from "@/lib/storage"
import GameScreen from "@/components/game-screen"
import StartGameModal from "@/components/start-game-modal"
import PauseGameModal from "@/components/pause-game-modal"
import GameOverModal from "@/components/game-over-modal"
import GameSidebar from "@/components/game-sidebar"
import { useRouter } from "next/navigation"
import WelcomeBackModal from "@/components/welcome-back-modal"

export default function GamePage() {
  const [playerName, setPlayerName] = useState<string>("")
  const [currentLevel, setCurrentLevel] = useState<number>(1)
  const [gameState, setGameState] = useState<"loading" | "welcome" | "start" | "playing" | "paused" | "gameover">(
    "loading",
  )
  const [showSidebar, setShowSidebar] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const storedName = getStoredName()
    const storedLevel = getStoredLevel()

    if (storedName) {
      setPlayerName(storedName)
      setGameState("welcome")
    } else {
      setGameState("start") 
    }

    if (storedLevel) {
      setCurrentLevel(storedLevel)
    }
  }, [])

  const handleStartGame = (name: string) => {
    setPlayerName(name)
    setGameState("playing")
  }

  const handleWelcomeComplete = () => {
    
    setTimeout(() => {
      setGameState("playing")
    }, 0)
  }

  const handlePauseGame = () => {
    setGameState("paused")
  }

  const handleResumeGame = () => {
    setGameState("playing")
  }

  const handleQuitGame = () => {
    router.push("/")
  }

  const handleGameOver = () => {
    setGameState("gameover")
  }

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)]">
      
      <GameSidebar isVisible={showSidebar} playerName={playerName} level={currentLevel} onToggle={toggleSidebar} />

     
      <div className="flex-1 flex items-center justify-center p-4 bg-white dark:bg-gray-900 overflow-y-auto">
        {gameState === "playing" && (
          <GameScreen
            playerName={playerName}
            initialLevel={currentLevel}
            setCurrentLevel={setCurrentLevel}
            onPause={handlePauseGame}
            onGameOver={handleGameOver}
          />
        )}

        
        {gameState === "welcome" && (
          <WelcomeBackModal playerName={playerName} level={currentLevel} onContinue={handleWelcomeComplete} />
        )}

        {gameState === "start" && (
          <StartGameModal onStart={handleStartGame} initialName={playerName} initialLevel={currentLevel} />
        )}

        {gameState === "paused" && (
          <PauseGameModal
            onResume={handleResumeGame}
            onQuit={handleQuitGame}
            playerName={playerName}
            level={currentLevel}
          />
        )}

        {gameState === "gameover" && (
          <GameOverModal
            playerName={playerName}
            level={currentLevel}
            onPlayAgain={() => setGameState("playing")}
            onQuit={handleQuitGame}
          />
        )}
      </div>
    </div>
  )
}
