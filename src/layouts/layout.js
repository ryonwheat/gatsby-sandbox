/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { Component } from "react"
// import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { ThemeProvider } from "styled-components"
import NavbarContext from "../components/navbarContext"
import ThemeContext from "../components/themeContext"
import theme from "../styles/theme"

import Header from "../components/header"
import Sidebar from "../components/sidebar"
import Footer from "../components/footer"
import "./layout.css"
import TransitionHandler from "../components/transition"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.children = props.children
    console.log("Layout.location: " + props.location)
    this.state = {
      animate: true,
    }
  }

  componentDidMount() {
    let openingAnimation = window.sessionStorage.getItem("openingAnimationRan")
    console.log(
      "layout.componentDidMount.openingAnimation: " + openingAnimation
    )

    if (window.sessionStorage.getItem("openingAnimationRan") === null) {
      let body = document.body
      body.classList.add("page-loading")
      document.getElementById("page-container").classList.remove("fade-in")

      setTimeout(() => {
        body.classList.remove("page-loading")
        document.getElementById("page-container").classList.add("fade-in")
      }, 2000)

      window.sessionStorage.setItem("openingAnimationRan", true)
    }
  }

  // child to parent communication
  callback = data => {
    console.log("Layout.callback: " + data)
    this.props.parentCallback(data)
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={theme}>
            <ThemeContext.Consumer>
              {context => (
                <NavbarContext.Consumer>
                  {navbar => (
                    <TransitionHandler location={this.props.location}>
                      <div
                        id="page-container"
                        className={`page-container ${
                          context.dark ? "dark" : "light"
                        }`}
                      >
                        {navbar.isNavbarLeft === true && (
                          <Sidebar
                            siteTitle={data.site.siteMetadata?.title || `Title`}
                          />
                        )}
                        {navbar.isNavbarLeft === false && (
                          <div className="sticky">
                            <Header
                              siteTitle={
                                data.site.siteMetadata?.title || `Title`
                              }
                              parentCallback={this.callback}
                            />
                          </div>
                        )}

                        <div className="main-content">
                          {/* <div>Layout IsDark: {context.dark === true ? "true" : "false"}</div> */}
                          {/* <div>navbar.isNavbarLeft: {navbar.isNavbarLeft === true ? "true" : "false"}</div> */}
                          {this.children}
                        </div>

                        <div id="curtain" className="curtain">
                          <div id="loading-bar" className="loading-bar"></div>
                        </div>

                        <Footer />
                      </div>
                    </TransitionHandler>
                  )}
                </NavbarContext.Consumer>
              )}
            </ThemeContext.Consumer>
          </ThemeProvider>
        )}
      />
    )
  }
}

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <ThemeContext.Consumer>
//         {context => (
//           <NavbarContext.Consumer>
//             {navbar => (
//               <div id="page-container"
//               className={`${
//                 context.dark ? "dark mainContent" : "light mainContent"
//               }`}
//               >
//                 {navbar.isNavbarLeft === true && (
//                   <Sidebar
//                     siteTitle={data.site.siteMetadata?.title || `Title`}
//                   />
//                 )}
//                 {navbar.isNavbarLeft === false && (
//                   <Header
//                     siteTitle={data.site.siteMetadata?.title || `Title`}
//                   />
//                 )}

//                 <div
//                   style={{
//                     margin: `0 auto`,
//                     maxWidth: 960,
//                     padding: `0px 1.0875rem 1.45rem`,
//                     paddingTop: 0,
//                   }}
//                 >
//                   {children}
//                 </div>
//                 <Footer />
//               </div>
//             )}
//           </NavbarContext.Consumer>
//         )}
//       </ThemeContext.Consumer>
//     )}
//   />
// )

/*
const Layout = ({ children }) => {
    //const [theme, toggleTheme] = useDarkMode()
    //const themeMode = theme === "light" ? lightTheme : darkTheme

//    const {theme, setTheme} = useContext(ThemeContext)
    
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    <ThemeContext.Consumer theme={lightTheme}>
      <>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Sidebar siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <h1>{theme === "light" ? "light theme" : "dark theme"}!</h1>
          <main>{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </>
      </ThemeContext.Consumer>

  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <ThemeContext>
    </ThemeContext>

  return (
    <ThemeContext.Consumer theme={lightTheme}>
      <>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Sidebar siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <h1>{theme === "light" ? "light theme" : "dark theme"}!</h1>
          <main>{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </>
      </ThemeContext.Consumer>
  )
}
*/

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
