import React from "react"
// import { Link } from "gatsby"
import get from "lodash/get"
// import { Helmet } from "react-helmet"
import Layout from "../components/layout"
// import SEO from "../components/seo"
// import ArticlePreview from "../components/article-preview"
// import Hero from "../components/hero"
// import Typical from "react-typical"
// import BlogPost from "../components/blog/blog-post"
// import "./test.css"
import { useSpring, animated } from "react-spring"
import BlogList from "../components/blog/blog-list"
const IndexPage = props => {
  //   // const siteTitle = get(this, "props.data.site.siteMetadata.title")
  const posts = get(props, "data.allContentfulBlogPost.edges")
  //   // const [author] = get(this, "props.data.allContentfulPerson.edges")

  const styleProps = useSpring({
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
      {console.log(props)}
      <div style={{ background: "#fff" }}>
        {/* <Helmet title={siteTitle} /> */}
        <div className="bg flex justify-end items-center text-6xl px-24">
          <animated.span style={styleProps} className="relative">
            Code Journal
          </animated.span>
        </div>
        <main className="bg-blue-50 mt-20 foo w-full p-10 mb-5">
          <div className=" m-28 mt-36 p-4">
            <div className="w-full border-solid border-2 my-40">
              <BlogList posts={posts} />
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
            fluid(background: "rgb:000000") {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          body {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
      }
    }
  }
`

// allContentfulPerson(
//   filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
// ) {
//   edges {
//     node {
//       name
//       shortBio {
//         shortBio
//       }
//       title
//       heroImage: image {
//         fluid(
//           maxWidth: 1180
//           maxHeight: 480
//           resizingBehavior: PAD
//           background: "rgb:000000"
//         ) {
//           ...GatsbyContentfulFluid_tracedSVG
//         }
//       }
//     }
//   }
// }
