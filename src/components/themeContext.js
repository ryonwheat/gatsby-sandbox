import React, { Component, createContext } from "react"

const defaultContext = {
  dark: false,
  toggleDark: () => {},
}

const ThemeContext = createContext(defaultContext)

// const supportsDarkMode = () =>
//   window.matchMedia("(prefers-color-scheme: dark)").matches === true

// TODO: look at making this into a generic provider
class ThemeProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dark: false,
    }
  }

  toggleDark = () => {
    let dark = !this.state.dark
    console.log("toggleDark.isDark: " + dark)
    localStorage.setItem("dark", JSON.stringify(dark))
    this.setState({ dark })

    // TODO: this belongs in the consumer, not the context!
    let x = document.getElementsByClassName("skill-icon")
    for (let i = 0; i < x.length; i++) {
      if (dark) {
        x[i].classList.remove("skill-icon-dark")
      } else {
        x[i].classList.add("skill-icon-dark")
      }
    }

    x = document.getElementsByClassName("skill")
    for (let i = 0; i < x.length; i++) {
      if (dark) {
        x[i].classList.remove("skill-light")
      } else {
        x[i].classList.add("skill-light")
      }
    }

    x = document.getElementsByClassName("point")
    for (let i = 0; i < x.length; i++) {
      if (dark) {
        x[i].classList.remove("point-light")
      } else {
        x[i].classList.add("point-light")
      }
    }

    // if (dark) {
    //   //   this.toggle("page-container", "light", "dark")
    //   let x = document.getElementsByClassName("skill-icon")
    //   for (let i = 0; i < x.length; i++) {
    //     x[i].classList.remove("skill-icon-dark")
    //   }
    // } else {
    //   //   this.toggle("page-container", "dark", "light")
    //   let x = document.getElementsByClassName("skill-icon")
    //   for (let i = 0; i < x.length; i++) {
    //     x[i].classList.add("skill-icon-dark")
    //   }
    // }
  }

  componentDidMount() {
    const isDark = JSON.parse(localStorage.getItem("dark"))
    console.log("isDark: " + isDark)
    if (isDark) {
      this.setState({ dark: isDark })
    } else {
      this.setState({ dark: this.state.dark })
    }

    // if (isDark) {
    //     this.toggle("page-container", "light", "dark")
    // } else {
    //     this.toggle("page-container", "dark", "light")
    // }
  }

  toggle(id, from, to) {
    document.getElementById(id).classList.add(to)
    document.getElementById(id).classList.remove(from)
  }

  render() {
    const { children } = this.props
    const { dark } = this.state
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
