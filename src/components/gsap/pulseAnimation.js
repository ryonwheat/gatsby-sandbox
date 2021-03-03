import React, { useEffect, useRef } from "react"
import gsap from "gsap"

const Pulse = () => {
  const elem = useRef()
  useEffect(() => {
    gsap.to([elem.current], {
      scale: 2,
      repeat: -1,
      duration: 2,
      // scale: 20,
      // repeat: -1,
      // duration: 1.5,
    })
  })

  const backgroundCircle = useRef()
  useEffect(() => {
    gsap.to([backgroundCircle.current], {
      scale: 3,
      repeat: -1,
      duration: 2,
      opacity: 0.05,
    })
  })

  const ring = useRef()
  useEffect(() => {
    gsap.to([ring.current], {
      scale: 3,
      repeat: -1,
      duration: 2,
      opacity: 0,
    })
  })

  return (
    <div>
      <div
        ref={ring}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#699aae",
          borderRadius: "50%",
          height: "40px",
          width: "40px",
          zIndex: "1",
        }}
      ></div>
      <div
        ref={backgroundCircle}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#aeceef",
          borderRadius: "50%",
          height: "25px",
          width: "25px",
          zIndex: "2",
        }}
      ></div>
      <div
        ref={elem}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          borderRadius: "50%",
          height: "16px",
          width: "16px",
          zIndex: "3",
        }}
      ></div>
    </div>
  )
}

export default Pulse
