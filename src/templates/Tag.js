import React from "react"
import { Link, graphql } from "gatsby"
import { Container, CardColumns } from 'react-bootstrap'

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
        <CardColumns>
            {edges.map(({ node }) => {
                console.log(node)
                const { slug } = node.fields
                const { title } = node.frontmatter
                return (
                    <PostItem post={node} />
                )
            })}
        </CardColumns>

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
          }
        }
      }
    }
  }
`