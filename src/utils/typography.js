import Typography from "typography"
import githubTheme from "typography-theme-github"
//import fairyGateTheme from "typography-theme-fairy-gates"


const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Arial", "Georgia", "serif"],
})


// const typography = new Typography(githubTheme)

// export const { scale, rhythm, options } = typography
export default typography
