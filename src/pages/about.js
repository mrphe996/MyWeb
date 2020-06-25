import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
             Work hard every day to achieve success.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3 id="dynamic-styles">Who Am I ?</h3>
          <p>
            
Woo. Hi everyone, My name is Luu Quang Nghia, and people still call me Kailluu. I was born in 2000 offline !!! I have been living in many parts of the country since childhood, so I have a bit of perspective from life.
          </p>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.kailluu.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Regular image</figcaption>
          </figure>
          <p>
            {/* Both post and page templates are light and minimal, with all the
            focus on the content while the design of the theme gets out of the
            way. Beneath the hood, London enjoys the full power of the{" "}
            <a href="https://docs.ghost.org/api/handlebars-themes/">
              Ghost Handlebars Theme API
            </a>{" "}
            to provide limitless customisation options and dynamic styles. */}
            My jobs:

          </p>
          <p>
            I used to be a fresher software engineer at a Japanese company in Hanoi, in the process
            I feel like I am more interested in data, so I am learning more now
            want to find a better job.
        
          </p>
        </div>
      </article>
    </Layout>
  )
}
const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    kailluu: file(
      relativePath: { eq: "111.jpg.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 10000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
