import React from "react"
// import { Link } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"

const IndexPage = props => (
  <Layout location={props.location}>
    <div>
      <SEO title="Home" />
      <h1>
        <PageTitle title="Hi people" />
      </h1>
      <p>Welcome to my Gatsby site. A place for learning all things React!</p>
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
