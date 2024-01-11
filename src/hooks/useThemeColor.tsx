import { useState, useEffect } from "react"

export default function useThemeColor() {
  const [themeColor, setThemeColor] = useState<string>(() => {
    const patternColor = localStorage.getItem('theme-color')

    if (patternColor === null) {
      return 'ligth'
    } else {
      return patternColor
    }
  })

  function handleChangeTheme() {
    setThemeColor(themeColor === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    localStorage.setItem('theme-color', themeColor)
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(themeColor)
  }, [themeColor])

  return [themeColor, handleChangeTheme] as [string, typeof handleChangeTheme]
}
