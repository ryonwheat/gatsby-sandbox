import React, { Component } from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class Toggle extends Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div>
            <input
              type="checkbox"
              id="toggle"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default Toggle
