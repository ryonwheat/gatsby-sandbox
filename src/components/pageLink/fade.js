import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import gsap, { TweenMax } from "gsap"

const fadeOut = ({ props, node, e, exit, entry }) => {
  console.log("handleExit: " + JSON.stringify(props), node, e, exit, entry)
  const duration = props.length
  console.log("duration: " + duration)

  return gsap
    .timeline()
    .fromTo(node, { opacity: 1 }, { opacity: 0, duration: duration })
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

  return gsap
    .timeline()
    .fromTo(node, { opacity: 0 }, { opacity: 1, duration: duration })
}

const Fade = props => {
  return (
    <TransitionLink
      to={props.to}
      className={props.class}
      exit={{
        // delay: 1,
        length: 2,
        trigger: ({ node, e, exit, entry }) =>
          fadeOut({ props: exit, node, e, exit, entry }),
      }}
      entry={{
        // delay: 2,
        length: 1.5,
        trigger: ({ node, e, exit, entry }) =>
          fadeIn({ props: entry, node, e, exit, entry }),
      }}
    >
      {props.children}
    </TransitionLink>
  )
}

export default Fade
