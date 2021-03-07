import React from "react"
import readingTime from "reading-time"
import Img from "gatsby-image"
import { Link } from "gatsby"
const BlogList = ({ posts }) => {
  return (
    <>
      {posts.map(post => {
        const {
          heroImage,
          tags,
          title,
          publishDate,
          description,
          body,
          slug,
        } = post.node
        const readStats = readingTime(body.childMarkdownRemark.rawMarkdownBody)
        return (
          <Link to={`/blog/${slug}`}>
            <article className="max-h-96 overflow-y-hidden flex mb-5 w-full">
              <div
                className="px-3 overflow-hidden min-h-96"
                style={{ minWidth: "60%" }}
              >
                <Img alt={title} fluid={heroImage.fluid} />
              </div>
              <div className="p-3">
                <div className="text-sm text-gray-400 my-5">
                  {tags && tags.map(tag => <span className="mr-4">{tag}</span>)}
                </div>
                <div className="text-6xl font-bold mb-5 text-gray-800">
                  {title}
                </div>
                <div
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: description.childMarkdownRemark.html,
                  }}
                />
                <div className="text-sm mt-10 text-gray-500">
                  <span>{publishDate}</span> | <span> {readStats.text}</span>
                </div>
              </div>
            </article>
          </Link>
        )
      })}
    </>
  )
}

export default BlogList
