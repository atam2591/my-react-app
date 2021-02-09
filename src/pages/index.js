import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Learn to design code React Apps</h1>
    <p>
      Complete courses about the best tools and design systems. Prototype and
      build apps with React and Swift
    </p>
    <Link to="/page-2/">Watch the video test</Link> <br />
  </Layout>
)

export default IndexPage
