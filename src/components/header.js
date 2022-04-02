import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import style from "./header.module.css"

import NavLinks from "./navLinks"
import NavbarToggle from "./navbarToggle"
import ThemeToggle from "./themeToggle"

class Header extends Component {
  constructor(props) {
    super(props)
  }

  handleHover = event => {
    let el = document.getElementById("brand-icon")
    if (el) {
      console.log("hover: " + el.classList)
      el.classList.add(`${style.brandIconAnimation}`)

      setTimeout(() => {
        el.classList.remove(`${style.brandIconAnimation}`)
      }, 1200)
    }
  }

  handleClick = event => {
    console.log("Header.handleClick")
    this.props.parentCallback(event)
  }

  callback = data => {
    this.props.parentCallback(data)
  }

  render() {
    const StyledHeader = styled.header`
      //   position: sticky;
      //   top: 0;
      //   background-color: var(--header-background-color);
      //   margin: 0;
      //   padding: 0;

      .sticky1 {
        position: sticky;
        top: 0;
        height: 50px;
        background-color: #113399;
      }
    `

    return (
      //     <div className="sticky-">
      <StyledHeader>
          <div className={`${style.headerInnerWrap} row1`}>
            <div className={`${style.brandContainer} col3`}>
              <div id="brand-icon" className={`${style.brandIcon}`}>
                <div className={`${style.brandContent}`}>RH</div>
              </div>
            </div>
            <div className={`${style.navWrap} col6`}>
              <NavLinks />
            </div>
            <div className={`${style.toggleIcon} col3`}>
              <NavbarToggle />
              <ThemeToggle />
            </div>
          </div>
      </StyledHeader>
      //   </div>
    )
  }
}

// const Header = ({ siteTitle, parentCallback }) => (
//   <ThemeContext.Consumer>
//     {context => (
//       <NavbarContext.Consumer>
//         {navbar => (
//           <header>
//             <div className={`${style.headerInnerWrap} ${style.row}`}>
//               <div className={`${style.branding} col-3`}>
//                 <div
//                   id="brand-icon"
//                   className={`${style.brandingIcon}`}
//                   onMouseOver={handleHover}
//                 >
//                   <span>R</span>
//                   <span>H</span>
//                 </div>
//                 <Link to="/" style={{ textShadow: "none" }}>
//                   {siteTitle}
//                 </Link>
//               </div>
//               {/* <div>
//             <button className="dark-switcher" onClick={context.toggleDark}>
//               {!context.dark ? (
//                 <span>Light mode ☀</span>
//               ) : (
//                 <span>Dark mode ☾</span>
//               )}
//             </button>
//           </div> */}
//               <div className={`${style.navWrap} col-6`}>
//                 <NavLinks />
//               </div>
//               <div className={`${style.toggleIcon} col-3`}>
//                 <NavbarToggle toggleNavbar={navbar.toggleNavbar} />
//                 <ThemeToggle
//                   isDark={context.dark}
//                   toggleTheme={context.toggleDark}
//                 />
//                 <button onClick={handleClick}>Bubble Up</button>
//               </div>

//               {/* <div className={`${style.toggleIcon} ${style.col1}`}>
//             <NavbarContext.Consumer>
//               {navbar => (
//                 <NavbarToggle
//                   isNavbarLeft={navbar.isNavbarLeft}
//                   toggleNavbar={navbar.toggleNavbar}
//                 />
//               )}
//             </NavbarContext.Consumer>
//             <ThemeToggle
//               isDark={context.dark}
//               toggleTheme={context.toggleDark}
//             />
//           </div> */}
//             </div>
//           </header>
//         )}
//       </NavbarContext.Consumer>
//     )}
//   </ThemeContext.Consumer>
// )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "Ryan",
}

export default Header
