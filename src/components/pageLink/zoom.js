import React from "react"
import style from "../header.module.css"
import TransitionLink from "gatsby-plugin-transition-link"
import gsap, { TweenMax } from "gsap"

const zoomOut = ({ props, node, e, exit, entry }) => {
  const duration = props.length
  return gsap
    .timeline()
    .fromTo(
      node,
      { transform: "scale(1, 1)" },
      { transform: "scale(1, .002)", duration: duration * 0.2 }
    )
    .to(node, { transform: "scale(0.2, .002)", opacity: 0, duration: duration * 0.8 })
}

const zoomIn = ({ props, node, e, exit, entry }) => {
  const duration = props.length
  return gsap
    .timeline()
    .fromTo(
      node,
      { transform: "scale(0.2, .002)" },
      { transform: "scale(1, .002)", opacity: 1, duration: duration * .6 }
    )
    .to(node, { transform: "scale(1, 1)", duration: duration * .4})
}

const Zoom = props => {
  return (
    <TransitionLink
      className={props.class}
      to={props.to}
      exit={{
        // delay: 1,
        length: 1.5,
        trigger: ({ node, e, exit, entry }) =>
          zoomOut({ props: exit, node, e, exit, entry }),
      }}
      entry={{
        delay: 1.5,
        length: 1.5,
        trigger: ({ node, e, exit, entry }) =>
          zoomIn({ props: entry, node, e, exit, entry }),
      }}
    >
      {props.children}
    </TransitionLink>
  )
}

export default Zoom
