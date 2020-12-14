import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout.js"
import SEO from "../components/seo.js"

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <h1>About</h1>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default AboutPage