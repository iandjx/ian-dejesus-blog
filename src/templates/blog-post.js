import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import get from "lodash/get"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={dracula}
        language={language}
        children={value}
        showLineNumbers
      />
    )
  },
}

const BlogPostTemplate = props => {
  const post = get(props, "data.contentfulBlogPost")
  const siteTitle = get(props, "data.site.siteMetadata.title")

  return (
    <div className="px-56 flex flex-col items-center m-10">
      <Helmet title={`${post.title} | ${siteTitle}`} />
      <div className="text-left w-full text-6xl font-bold">{post.title}</div>
      <div className="text-left w-full text-6xl font-bold">
        {post.publishDate}
      </div>

      <div className="w-full max-h-500 overflow-hidden">
        <Img alt={post.title} fluid={post.heroImage.fluid} className="h-auto" />
      </div>
      <div id="blog-body">
        <ReactMarkdown
          renderers={renderers}
          children={post.body.childMarkdownRemark.rawMarkdownBody}
        />
      </div>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
  }
`
