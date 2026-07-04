import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@/contexts/ThemeContext'
import { SwitchRoot, SwitchThumb, ThemeSwitcherContainer } from './styles'

export function ThemeToggle() {
  const { enableDarkMode, toggleTheme } = useTheme()

  return (
    <ThemeSwitcherContainer>
      <FontAwesomeIcon icon={faMoon} />
      <SwitchRoot
        id="theme-switch"
        checked={!enableDarkMode}
        onCheckedChange={() => toggleTheme()}
      >
        <SwitchThumb />
      </SwitchRoot>
      <FontAwesomeIcon icon={faSun} />
    </ThemeSwitcherContainer>
  )
}
