import React from "react"
import { Link, graphql } from "gatsby"
import { Container } from 'react-bootstrap'
import Masonry from 'react-masonry-css'

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostItem from "../components/PostItem"

const Tag = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={tag}
      />

      <Container>
        <h1 className="mb-4">{tagHeader}</h1>
        <Masonry
            breakpointCols={{default: 4, 1450: 3, 767: 2, 500: 1}}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {edges.map(({ node }) => {
                console.log(node)
                return (
                    <PostItem post={node} />
                )
            })}
        </Masonry>

        <div className="text-center mt-4">
            <Link className="arrow after text-primary" to="/tags">View all tags</Link>
        </div>
      </Container>

    </Layout>
  )
}
export default Tag

export const pageQuery = graphql`
  query($tag: String) {
    site {
        siteMetadata {
          title
        }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            thumbnail
            author
          }
        }
      }
    }
  }
`