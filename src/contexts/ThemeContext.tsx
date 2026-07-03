import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { getStorageTheme, saveStorageTheme } from '@/storage/themeConfig'

type ThemeContextType = {
  enableDarkMode: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [enableDarkMode, setEnableDarkMode] = useState(true)

  // Start from the default on the server and first client render (avoids a
  // hydration mismatch), then restore the saved preference once mounted.
  useEffect(() => {
    setEnableDarkMode(getStorageTheme() === 'DARK_THEME')
  }, [])

  const toggleTheme = useCallback(() => {
    setEnableDarkMode((prev) => {
      const newTheme = !prev
      saveStorageTheme(newTheme ? 'DARK_THEME' : 'LIGHT_THEME')
      return newTheme
    })
  }, [])

  const value = useMemo(
    () => ({ enableDarkMode, toggleTheme }),
    [enableDarkMode, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export { ThemeContext }
