import React from "react"
import { Link } from "gatsby"
import get from "lodash/get"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ArticlePreview from "../components/article-preview"

class IndexPage extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allContentfulBlogPost.edges")
    const [author] = get(this, "props.data.allContentfulPerson.edges")

    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          {/* <img src="web-design.jpg" className="hero-background" /> */}

          <div className="wrapper">
            <h2 className="section-headline text-gray-400">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
