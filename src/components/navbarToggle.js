import React from "react"
// import { bool, func } from "prop-types"
import NavbarContext from "./navbarContext"
import { GiHamburgerMenu } from "react-icons/gi"

const NavbarToggle = ({ toggleNavbar }) => {
  return (
    <NavbarContext.Consumer>
      {context => (
        <div>
          <GiHamburgerMenu onClick={context.toggleNavbar} />
        </div>
      )}
    </NavbarContext.Consumer>
  )
}

// NavbarToggle.propTypes = {
//   toggleNavbar: func.isRequired,
// }

export default NavbarToggle
