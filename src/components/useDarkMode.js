import { useState } from "react"

export const useDarkMode = () => {
    const [theme, setTheme] = useState("light")

    const setMode = mode => {
        setTheme(mode)
    }

    const toggleTheme = () => {
        if (theme === "light") {
            setMode("dark")
        }
        else {
            setMode("light")
        }
    }

    return [theme, toggleTheme]
}