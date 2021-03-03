/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react"
import "./src/styles/global.css"

import { NavbarProvider } from "./src/components/navbarContext"
import { ThemeProvider } from "./src/components/themeContext"

// export const wrapRootElement = (props) => {
//     return (
//       <SessionCheck>
//         <ReduxWrapper {...props} />
//       </SessionCheck>
//     )
//   };

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <NavbarProvider>{element}</NavbarProvider>
  </ThemeProvider>
)

export const onClientEntry = () => {
  window.onload = () => {
    console.log("onload...")
  }
}

export const onInitialClientRender = () => {
}
