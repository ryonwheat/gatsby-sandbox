import React, { Component } from "react"
import ContactForm from "../components/contactForm"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { TransitionGroup, CSSTransition } from "react-transition-group"

// TODO:
// 1. Create a TransitionHandler encapsulating the transition logic
// 2. Install gatsby-plugin-layout and remove the Layout wrapper in each page
// 3. Implement CSSTransition for more control and flexibility using keyframes
const pageTransitionEvent = 'gatsby-plugin-page-transition::exit';

class ContactPage extends Component {
  constructor(props) {
    super(props)
    this.listenHandler = this.listenHandler.bind(this)
    this.state = {
      in: false,
      location: props.location,
    }
  }

  componentDidMount() {
    global.window.addEventListener(pageTransitionEvent, this.listenHandler)
    this.setState({
      in: true,
    })
  }

  listenHandler() {
    this.setState({
      in: false,
    })
  }

  componentWillUnmount () {
    global.window.removeEventListener(pageTransitionEvent, this.listenHandler)
  }
  //   componentWillUnmount() {
  //     this.setState({ in: false })
  //   }

  render() {
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
    return (
      //   <TransitionGroup>
      <CSSTransition
        in={this.state.in}
        // key={this.state.location.pathname}
        timeout={{
          enter: transitionDelay,
          exit: transitionDelay,
        }}
        classNames="fade"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <div>
          {/* <Transition in={this.state.in} timeout={transitionDelay}>
        {state => (
          <div
            style={{
              ...fadeDefault,
              ...fadeTransition[state],
            }}
          > */}
          <Layout location={this.state.location}>
            <SEO title="Home" />
            <div>
              {/* <h1>Contact</h1> */}
              <h2 className="center">
                Thanks for reaching out! How can I help you out today?
              </h2>
              <div className="form-wrapper">
                <ContactForm />
              </div>
            </div>
          </Layout>
        </div>
      </CSSTransition>
      //   </TransitionGroup>
    )
  }
}

export default ContactPage
