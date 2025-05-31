export const savePlayerName = (name: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("playerName", name)
  }
}

export const getStoredName = (): string => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("playerName") || ""
  }
  return ""
}

export const saveCurrentLevel = (level: number): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("currentLevel", level.toString())
  }
}

export const getStoredLevel = (): number => {
  if (typeof window !== "undefined") {
    const level = localStorage.getItem("currentLevel")
    return level ? Number.parseInt(level, 10) : 1
  }
  return 1
}
