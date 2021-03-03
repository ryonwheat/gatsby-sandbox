import React, { Component } from "react"
import {
  Transition,
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

const transitionDelay = 1000
const fadeDefault = {
  transition: `opacity ${transitionDelay}ms ease-in`,
  opacity: "1",
}
const fadeTransition = {
  entering: { opacity: "0" },
  entered: { opacity: "1" },
  exiting: { opacity: "0" },
  exited: { opacity: "0" },
}

const timeout = 500
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
}

class TransitionHandler extends Component {
  constructor(props) {
    super(props)
    console.log("TransitionHandler.location: " + props.location)
    this.locationPathname =
      props.location == null ? "" : props.location.pathname
    this.state = {
        in: false
    }
  }

  componentDidMount() {
    this.setState({ in: true })
  }

  shouldComponentUpdate() {
    return this.props.location.pathname === window.location.pathname
  }

  render() {
    const { children, location } = this.props
    return (
    //   <TransitionGroup>
    //     <ReactTransition
    //       key={this.locationPathname}
    //       timeout={{
    //         enter: transitionDelay,
    //         exit: transitionDelay,
    //       }}
    //     >
          <Transition
        in={true}
        key={this.locationPathname}
        timeout={{
          enter: transitionDelay,
          exit: transitionDelay,
        }}
      >
          {status => (
            <div
              style={{
                ...fadeDefault,
                ...fadeTransition[status],
              }}
            >
              {children}
            </div>
          )}
          </Transition>
        // {/* </ReactTransition> */}
    //   </TransitionGroup>
    )
  }
}
export default TransitionHandler
