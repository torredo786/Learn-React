import React, {useContext} from 'react'
import { ThemeContext } from './ThemeContext'
import './styles/Nineteen.css'

export default function NineteenComp() {
    const {isDarkMode} = useContext(ThemeContext);
    const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';

  return (
    <div className={`container ${themeClass}`}>
      <p>This component uses selected theme</p>
    </div>
  )
}
