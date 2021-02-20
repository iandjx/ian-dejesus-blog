import React from "react"
// import { Link } from "gatsby"
// import get from "lodash/get"
// import { Helmet } from "react-helmet"
import Layout from "../components/layout"
// import SEO from "../components/seo"
// import ArticlePreview from "../components/article-preview"
// import Hero from "../components/hero"
// import Typical from "react-typical"
// import BlogPost from "../components/blog/blog-post"
// import "./test.css"
import { useSpring, animated } from "react-spring"

const IndexPage = () => {
  //   // const siteTitle = get(this, "props.data.site.siteMetadata.title")
  //   // const posts = get(this, "props.data.allContentfulBlogPost.edges")
  //   // const [author] = get(this, "props.data.allContentfulPerson.edges")

  const props = useSpring({
    from: {
      right: "-1000px",
    },
    to: {
      right: "0px",
    },
    config: {
      duration: 1000,
    },
  })

  return (
    // <div>hello</div>
    <Layout>
      <div style={{ background: "#fff" }}>
        {/* <Helmet title={siteTitle} /> */}
        <div className="bg flex justify-end items-center text-6xl px-24">
          <animated.span style={props} className="relative">
            Code Journal
          </animated.span>
        </div>
        <main className="bg-blue-50 mt-20 foo w-full p-10 mb-5">
          <div className=" m-28 mt-36 p-4">
            <div className="w-full border-solid border-2">
              <article className="max-h-96 overflow-y-hidden flex">
                <img className="w-3/5 px-3" src="image_1.jpg" alt="hello" />
                <div className="p-3">
                  <div className="text-sm text-gray-400 my-5">ILLUSTRATION</div>
                  <div className="text-6xl font-bold">
                    Build a website in minutes with Adobe
                  </div>
                </div>
              </article>

              <article className="max-h-96 overflow-y-hidden flex mb-5">
                <img className="w-3/5 px-3" src="image_1.jpg" alt="hello" />
                <div className="p-3">
                  <div className="text-sm text-gray-400 my-5">ILLUSTRATION</div>
                  <div className="text-6xl font-bold">
                    Build a website in minutes with Adobe
                  </div>
                </div>
              </article>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
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
