import React from "react"
import { Link } from "gatsby"
import style from "./header.module.css"
import Fade from "./pageLink/fade"
import Zoom from "./pageLink/zoom"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import gsap, { TweenMax } from "gsap"
import { GiScaleMail } from "react-icons/gi"

const fadeOut = ({ props, node, e, exit, entry }) => {
  console.log("handleExit: " + JSON.stringify(props), node, e, exit, entry)
  const duration = props.length
  console.log("duration: " + duration)

  return gsap.timeline().fromTo(node, { opacity: 1 }, { opacity: 0, duration: duration })
//   TweenMax.to(node, 1, { opacity: 0 })

//   gsap.timeline().to(node, {
//     duration: 2,
//     opacity: 0,
//     // repeat: 1,
//   })
  /*
  gsap
    .timeline()
    .to(node, {
      duration: 0.25,
    //   ease: "power2.in",
      opacity: ".75",
      //   transform: "scale(10)",
      //   transform: "rotateY(0deg)",
      //   transform: "translateX(-50%) translateZ(-200px) rotateY(-45deg)",
    })
    .to(node, {
      duration: 0.25,
    //   ease: "power2.out",
      opacity: ".5",
      //   transform: "scale(1)",
      //   transform: "rotateY(-90deg)",
    })
    .to(node, {
      duration: 0.25,
    //   ease: "power2.out",
      opacity: ".25",
      //   transform: "scale(1)",
      //   transform: "rotateY(-90deg)",
    })
    .to(node, {
      duration: 0.25,
    //   ease: "power2.out",
      opacity: "0",
      //   transform: "scale(1)",
      //   transform: "rotateY(-90deg)",
    })
    */
}

const fadeIn = ({ props, node, e, exit, entry }) => {
  console.log("handleEntry: " + JSON.stringify(props), node, e, exit, entry)
  const duration = props.length

  return gsap.timeline().fromTo(node, { opacity: 0 }, { opacity: 1, duration: duration })

}

const zoomOut = ({ props, node, e, exit, entry }) => {
    const duration = props.length
    return gsap.timeline().fromTo(node, { transform: "scale(1, 1)" }, { transform: "scale(0.2, .002)", duration: duration })
}

const zoomIn = ({ props, node, e, exit, entry }) => {
    const duration = props.length
    return gsap.timeline().fromTo(node, { transform: "scale(0.2, .002)" }, { transform: "scale(1, 1)", duration: duration })
}

const ListLink = props => (
  <li className={`${style.navListItem}`}>
    <div className={`${style.navLinkContainer} `}>
        <Fade to={props.to} class={`${style.navLink}`}>
            {props.children}
        </Fade>

        {/* <Zoom to={props.to} class={`${style.navLink}`}>
            {props.children}
        </Zoom> */}

      {/* <TransitionLink
        className={`${style.navLink}`}
        to={props.to}
        exit={{
          // delay: 1,
          length: 2,
          trigger: ({ node, e, exit, entry }) =>
            zoomOut({ props: exit, node, e, exit, entry }),
        }}
        entry={{
          delay: 2,
          length: 1.5,
          trigger: ({ node, e, exit, entry }) =>
            zoomIn({ props: entry, node, e, exit, entry }),
        }}
      >
        {props.children}
      </TransitionLink> */}
    </div>

    {/* paintDrip, swipe, cover, or fade*/}
    {/* <AniLink fade to={props.to} className={`${style.navLink}`} duration={1}>
      {props.children}
    </AniLink> */}

    {/* <Link className={`${style.navLink}`} to={props.to}>
        {props.children}
      </Link> */}
    {/* <Link className={`${style.navLink}`} onClick={handleNavLinkClick} to={props.to}>{props.children}</Link> */}
  </li>
)

const NavLinks = ({ navStyle }) => {
  return (
    <nav className={navStyle}>
      <ul>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/portfolio">Portfolio</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/skills">Skills</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </nav>
  )
}

export default NavLinks
