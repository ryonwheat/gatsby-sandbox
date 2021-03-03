import React, { useRef, useEffect } from "react"
import { TimelineLite } from "gsap"

const Trace = () => {
  const boxRef = useRef()
  useEffect(() => {
      var tl = new TimelineLite()
      tl.fromTo(
          [boxRef.current], 
          { x: "100px", y: "0" },
          { x: "500px", duration: 2 },
      )
      .to(
        [boxRef.current], 
        { y: "-100px", duration: 2 },
      )
      .to(
        [boxRef.current], 
        { x: "100px", duration: 2 },
      )
      .to(
        [boxRef.current], 
        { y: "0px", duration: 2 },
      )
    // gsap.to([boxRef.current], {
    //   x: "300px",
    //   duration: 2,
    //   repeat: -1,
    // })
    // gsap.to([boxRef.current], {
    //     x: "300px",
    //     y: "50px",
    //     duration: 2,
    //     repeat: -1,
    //   })
  })
  return (
    <div
      ref={boxRef}
      style={{
        position: "relative",
        top: "50%",
        left: "0px",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        background: "limegreen",
      }}
    />
  )
}

export default Trace
