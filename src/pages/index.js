import React from "react"
// import { Link } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"

const IndexPage = props => (
  <Layout location={props.location}>
    <div>
      <SEO title="Home" />
      <h5 className="h5-page-title">Hi! My name is</h5>
      <h1>
        <PageTitle title="Ryan Heath" className="main-page-header elastic" />
      </h1>
      <p>
        I'm a freelance full stack software engineer based out of the Denver, CO
        area with over 20 years of industry experience. My passion is designing
        and developing web based solutions for clients business needs.
      </p>
      <div>
        {/* <Image /> */}
        {/* <img
          className="landing-image"
          src="https://source.unsplash.com/random/400x200/?code"
          alt=""
        /> */}
      </div>
      {/* <Link to="/about/">About</Link>
      <br />
      <Link to="/portfolio">Portfolio</Link> */}
      {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </div>
  </Layout>
)

export default IndexPage
