import * as React from "react"
import { graphql, Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled(Link)`
  margin-bottom: 20px;
  color: blue;
`

const IndexPage = ({ data }) => {
// export default ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>Nanye's Thoughts</h1>
        <h4>{ data.allMarkdownRemark.totalCount }</h4>
        {
          data.allMarkdownRemark.edges.map(({node}) => (
              <div key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>
                  {node.frontmatter.title} - {node.frontmatter.date}
                </BlogTitle>
              </BlogLink>
              <p>{node.excerpt}</p>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`