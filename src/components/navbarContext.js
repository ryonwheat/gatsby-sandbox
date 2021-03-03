import React, { Component, createContext } from "react"

const defaultContext = {
  isNavbarLeft: false,
  toggleNavbar: () => {},
}

const NavbarContext = createContext(defaultContext)

class NavbarProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavbarLeft: false,
    }
  }

  toggleNavbar = () => {
    let isNavbarLeft = !this.state.isNavbarLeft
    localStorage.setItem("navbar", JSON.stringify(isNavbarLeft))
    this.setState({ isNavbarLeft })
  }

  componentDidMount() {
    const lsNavbar = JSON.parse(localStorage.getItem("navbar"))
    if (lsNavbar) {
      this.setState({ isNavbarLeft: lsNavbar })
    } else {
      this.setState({ isNavbarLeft: this.state.isNavbarLeft })
    }
  }

  render() {
    const { children } = this.props
    const { isNavbarLeft } = this.state
    return (
      <NavbarContext.Provider
        value={{
          isNavbarLeft,
          toggleNavbar: this.toggleNavbar,
        }}
      >
        {children}
      </NavbarContext.Provider>
    )
  }
}

export default NavbarContext

export { NavbarProvider }
