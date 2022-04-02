import React, { useContext, useRef, useEffect, Component } from "react"
import { Link } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../components/seo.js"
import PageTitle from "../components/pageTitle"
import styled from "styled-components"

class AboutPage extends Component {
  constructor(props) {
    super(props)
    console.log("AboutPage.props: " + JSON.stringify(props))

    // const boxRef = useRef()
    // useEffect(() => {
    //   gsap.to([boxRef.current], {
    //     // autoAlpha: 1,
    //     // y: 150,
    //   })
    // })
  }

  componentDidMount() {}

  callback(data) {
    console.log("About.callback: " + data)
  }

  render() {
    const StyledAbout = styled.div`
      position: relative;
      top: 0;
      background-color: var(--header-background-color);
      margin: 0;
      padding: 0;
      width: 100%;
      z-index: 10;

    `
    return (
      <StyledAbout>
          <Layout location={this.props.location} parentCallback={this.callback}>
          <SEO title="About" />
          <div>
            <h1>
              <PageTitle title="About" />
            </h1>
            <div className="page-description">
              <p>
                Ryan is an entrepreneur and software engineer with over 20 years
                of industry experience, with a strong focus on full stack web
                application development.
              </p>
              <p>
                He specializes in React, JavaScript and CSS3 for responsive, client side
                development with Java and Spring used for backend implementations.
                He is also well versed in Salesforce's CRM technologies such as
                Apex, Lightning, Visualforce, and SOQL. In addition, he enjoys all
                aspects of software design and ... integrations of various types
                of frameworks...
              </p>
              <p>
                  He's passionate about delivering the highest quality products aimed at solving client's individual business needs.
              </p>
              <p>Follows best practices, delivers maintainable and well-structured code...</p>
              <p>Strong industry experience in the telecommunications space...</p>
              <p>
                Strategic focus on building and implementing financial systems...
              </p>
              <p>Extraordinary attention to detail...</p>
              <p>Solutions driven...</p>
              <p>Exceptional results in ...</p>
            </div>
            <div>
              <Link to="/contact">Let's connect!</Link>
            </div>
          </div>
        </Layout>
      </StyledAbout>

      //         <div id="page-container" className="page-container">

      // <header>
      //         <div className={`${style.headerInnerWrap} ${style.row}`}>
      //           <div className={`${style.branding} col-3`}>
      //             <div
      //               id="brand-icon"
      //               className={`${style.brandingIcon}`}
      //               onMouseOver={this.handleHover}
      //             >
      //               <span>R</span>
      //               <span>H</span>
      //             </div>
      //             <Link to="/" style={{ textShadow: "none" }}>
      //               {this.props.siteTitle}
      //             </Link>
      //           </div>
      //           <div className={`${style.navWrap} col-6`}>
      //             <NavLinks />
      //           </div>
      //           <div className={`${style.toggleIcon} col-3`}>
      //             <NavbarToggle />
      //             <ThemeToggle />
      //             <button onClick={this.handleClick}>Bubble Up</button>
      //           </div>
      //         </div>
      //       </header>

    )
  }
}

export default AboutPage
