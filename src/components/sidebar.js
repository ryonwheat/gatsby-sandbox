import React from "react"
import { Link } from "gatsby"
import { FaGithub, FaFacebook } from "react-icons/fa"

import NavLinks from "./navLinks"
import NavbarToggle from "./navbarToggle"
import ThemeToggle from "./themeToggle"
// import { useDarkMode } from "./useDarkMode"

import style from "./sidebar.module.css"
// import { darkTheme, lightTheme } from "./theme"

const Sidebar = ({ siteTitle }) => {
  //  const [theme, toggleTheme] = useDarkMode()
  //  const themeMode = theme === "light" ? lightTheme : darkTheme

  /*
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
      console.log("Theme: " + theme);
    setTheme(theme === "light" ? "dark" : "light")
  }
  */
  return (
    <div className={style.sidebar}>
      <div>
        <div className={style.hamburgerIcon}>
          <NavbarToggle />
        </div>
        <div className="toggle-icon">
          <ThemeToggle />
        </div>
        <Link to="/" style={{ textShadow: "none" }}>
          {siteTitle}
        </Link>
        {/* 
            <div>
        <button className="dark-switcher" onClick={theme.toggleDark}>
              {theme.dark ? <span>Light mode ☀</span> : <span>Dark mode ☾</span>}
            </button>
            </div>
            */}
        <NavLinks navStyle={style.navSidebar} />
        <div className={style.socialIcons}>
          <ul>
            <li>
              <a href="https://github.com/ryonwheat" target="blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://facebook.com/ryonwheat" target="blank">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
