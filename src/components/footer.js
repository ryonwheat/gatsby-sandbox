import React from "react"
import { FaGithub, FaFacebook } from "react-icons/fa"
import ThemeContext from "./themeContext"
import style from "./footer.module.css"

const Footer = () => {
  return (
    <ThemeContext.Consumer>
      {context => (
        <footer>
          <div className={style.footerInnerWrap}>
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
            © {new Date().getFullYear()}
          </div>
        </footer>
      )}
    </ThemeContext.Consumer>
  )
}

export default Footer
