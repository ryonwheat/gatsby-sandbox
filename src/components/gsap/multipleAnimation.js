import React, { Component } from "react"
import { TimelineLite, TweenMax } from "gsap"
// import { TweenLite, TimelineLite, TweenMax, CSSPlugin } from "gsap"

class MultipleAnimation extends Component {
  constructor(props) {
    super(props)
    // reference to DOM
    this.b0 = null
    this.b1 = null
    this.b2 = null
    this.b3 = null
    this.fromVars = { y: 18 }
    this.vars = { y: -18, yoyo: true, repeat: -1 }

    this.box0 = null
    this.box1 = null

    this.elements = []
    // reference to animation
    this.timeline = new TimelineLite({ paused: true })
    this.tween = null
  }

  componentDidMount() {
    // use node ref to create animation
    this.tween = TweenMax.fromTo([this.b0, this.b2], this.fromVars, this.vars)
    TweenMax.fromTo(
      [this.b1, this.b3],
      { y: -18 },
      { y: 18, yoyo: true, repeat: -1 }
    )
    TweenMax.to([this.box0], {
        rotateX: 360,
        duration: 3,
        repeat: -1,
    })
    TweenMax.to([this.box1], {
        rotateY: 360,
        duration: 3,
        repeat: -1,
    })
    //    this.timeline.staggerTo(this.b1, 2, { autoAlpha: 1, y: -20 }, 0.1)
  }

  render() {
    return (
      <div className="container">
        <div className="gsapButtonContainer">
          {/* <h3>Control Tween</h3>
          <p>Use the buttons to control the tween animation.</p> */}
          <button className="btn gsap-btn" onClick={() => this.tween.play()}>
            Play
          </button>
          <button className="btn gsap-btn" onClick={() => this.tween.pause()}>
            Pause
          </button>
          <button className="btn gsap-btn" onClick={() => this.tween.reverse()}>
            Reverse
          </button>
          <button className="btn gsap-btn" onClick={() => this.tween.restart()}>
            Restart
          </button>
        </div>
        <div className="animationContainer">
          <ul>
            <li className="ball ball0" ref={li => (this.b0 = li)} />
            <li className="ball ball1" ref={li => (this.b1 = li)} />
            <li className="ball ball2" ref={li => (this.b2 = li)} />
            <li className="ball ball3" ref={li => (this.b3 = li)} />
          </ul>
          <ul>
            <li className="box0" ref={li => (this.box0 = li)} />
            <li className="box1" ref={li => (this.box1 = li)} />
          </ul>
        </div>
      </div>
    )
  }
}

export default MultipleAnimation
