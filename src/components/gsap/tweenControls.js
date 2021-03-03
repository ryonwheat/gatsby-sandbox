import React, { Component } from "react"
import { TweenLite } from "gsap"

class TweenControl extends Component {
  constructor(props) {
    super(props)

    this.classNames = props.classNames
    this.vars = props.vars
    this.element = null
    this.tween = null //TweenLite.to(this.element, this.vars).play()
//    this.tween = props.tween
    this.state = {
      btnClicked: "",
      tween: this.tween,
    }
    // this.onRestart = function() { this.tween.restart() }
    // console.log("TweenControl.Tween: " + JSON.stringify(props))
  }

//   onRestart = () => {
//     console.log("onRestart");
//   }

componentDidMount() {
    // use node ref to create animation
    // this.tween = TweenLite.to(this.element, 2, { x: 400, y: 0 }).play()
    this.tween = TweenLite.to(this.element, this.vars).play()
  }

  render() {
    return (
      <div>
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
          <div className={this.classNames} ref={div => (this.element = div)}></div>
        </div>
      </div>
    )
  }
}

export default TweenControl
