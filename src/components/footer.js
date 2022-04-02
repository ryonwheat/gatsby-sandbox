import React from "react"
import { FaFacebook, FaGithub } from "react-icons/fa"
import {
  FiCodepen,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi"
import ThemeContext from "./themeContext"
import style from "./footer.module.css"
import Icon from "./icon"
import { email, socialMedia } from "../config"

const Footer = () => {
  return (
    <ThemeContext.Consumer>
      {context => (
        <footer>
          <div className={style.footerInnerWrap}>
            <div className={style.socialIcons}>
              <ul>
                {socialMedia.map(({ name, url, icon }, i) => (
                  <li key={i} className={style.socialListItem}>
                    <a href={url} target="blank">
                      {/* <div dangerouslySetInnerHTML={{__html: {icon}}}></div> */}
                      <Icon name={name} />
                    </a>
                  </li>
                ))}
              </ul>
              {/* <ul>
                <li className={style.socialListItem}>
                  <a href="https://github.com/ryonwheat" target="blank">
                    <FiGithub />
                  </a>
                </li>
                <li className={style.socialListItem}>
                  <a href="https://linkedin.com/in/ryancheath/" target="blank">
                    <FiLinkedin />
                  </a>
                </li>
                <li className={style.socialListItem}>
                  <a href="https://codepen.com/ryonwheat" target="blank">
                    <FiCodepen />
                  </a>
                </li>
                <li className={style.socialListItem}>
                  <a href="https://instagram.com/ryonwheat" target="blank">
                    <FiInstagram />
                  </a>
                </li>
                <li className={style.socialListItem}>
                  <a href="https://facebook.com/ryonwheat" target="blank">
                    <FiFacebook />
                  </a>
                </li>
              </ul> */}
            </div>
            <div className={style.copywrite}>Designed and implemented by Ryan Heath</div>
            <div className={style.emailLink}>
              <a href="mailto:${email}">{email}</a>
            </div>
            <div className={style.copywrite}>© {new Date().getFullYear()}</div>
            {/* <div className={style.emailLink}><a href="mailto:ryonwheat@gmail.com">ryonwheat@gmail.com</a></div> */}
          </div>
        </footer>
      )}
    </ThemeContext.Consumer>
  )
}

export default Footer
