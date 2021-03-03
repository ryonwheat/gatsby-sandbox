import React, { Component } from "react"
import { TweenLite } from "gsap"
import TweenControl from "./tweenControls.js"

// const TweenButtonControl = ({ params }) => {
//   console.log("TweenButtonControl: " + JSON.stringify(params))
//   return (
//     <div className="gsapButtonContainer">
//       <h3>Control Tween</h3>
//       <p>Use the buttons to control the tween animation.</p>
//       <button className="btn gsap-btn" onClick={() => this.tween.play()}>
//         Play
//       </button>
//       <button className="btn gsap-btn" onClick={() => this.tween.pause()}>
//         Pause
//       </button>
//       <button className="btn gsap-btn" onClick={() => this.tween.reverse()}>
//         Reverse
//       </button>
//       <button className="btn gsap-btn" onClick={() => this.tween.restart()}>
//         Restart
//       </button>
//     </div>
//   )
// }

class SingleAnimation extends Component {
  constructor(props) {
    super(props)
    // reference to DOM
    this.element = null
    // reference to animation
    // this.tween = new TimelineLite({ paused: true })
    this.classNames = "box0"
    this.vars = {
      x: 400,
      y: 0,
      ease: "bounce.out",
      duration: 3,
      repeat: -1
    }
    this.tween = TweenLite.to(this.element, this.vars).play()
    this.state = {
      tween: this.tween,
    }
  }

//   toggleShow = () => {
//     this.setState({ isShow: !this.state.isShow })
//   }

  componentDidMount() {
    // use node ref to create animation
    // this.tween = TweenLite.to(this.element, 2, { x: 400, y: 0 }).play()
    // this.tween = TweenLite.to(this.element, {
    //   x: 400,
    //   y: 0,
    //   ease: "bounce.out",
    //   duration: 3,
    // }).play()
    // this.setState(this.tween)
  }

  render() {
    console.log("SingleAnimation.tween: " + this.tween)
    return (
      <div className="container">
        <TweenControl classNames={this.classNames} vars={this.vars} />
        {/* <TweenControl classNames="animation" vars={this.vars} onRestart={this.tween.restart()} tween={this.state.tween} /> */}
        {/* <TweenControl tween={this.state.tween} onClick={this.toggleShow} /> */}
        {/* <div className="gsapButtonContainer">
          <h3>Control Tween</h3>
          <p>Use the buttons to control the tween animation.</p>
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
        </div> */}

        {/* <div className="animationContainer">
          <div className="animation" ref={div => (this.element = div)}></div>
        </div> */}
      </div>
    )
  }
}

export default SingleAnimation
