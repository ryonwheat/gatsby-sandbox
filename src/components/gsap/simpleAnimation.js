import React, { useRef, useEffect } from "react"
import gsap from "gsap"

const SimpleAnimation = () => {
  const boxRef = useRef()
  useEffect(() => {
    gsap.to([boxRef.current], {
      x: "300px",
      rotation: 33,
      duration: 2,
      repeat: -1,
      yoyo: true,
    })
  })
  return (
    <div
      ref={boxRef}
      style={{
        width: "70px",
        height: "70px",
        background: "salmon",
      }}
    />
  )
}

export default SimpleAnimation
