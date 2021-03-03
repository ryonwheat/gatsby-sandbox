import React from "react"
import { bool, func } from "prop-types"
import ThemeContext from "./themeContext"
import { CgToggleOff, CgToggleOn } from "react-icons/cg"

const ThemeToggle = ({ isDark, toggleTheme, parentCallback }) => {

  return (
      <ThemeContext.Consumer>
          {context => (
              <div>
                  {context.dark === true ? (<CgToggleOff onClick={context.toggleDark} />) : (<CgToggleOn onClick={context.toggleDark} />)}
              </div>
          )}
      </ThemeContext.Consumer>
    // <div>
    //   {isDark === true ? (
    //     <CgToggleOff onClick={toggleTheme} />
    //   ) : (
    //     <CgToggleOn onClick={toggleTheme} />
    //   )}
    // </div>
  )
}

// ThemeToggle.propTypes = {
//   isDark: bool.isRequired,
//   toggleTheme: func.isRequired,
// }

export default ThemeToggle
