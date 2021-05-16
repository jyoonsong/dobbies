import * as React from "react"
import { graphql } from "gatsby"
import { Container } from 'react-bootstrap'
import Masonry from 'react-masonry-css'

import Intro from "../components/Intro"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostItem from "../components/PostItem"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Intro />
        <p>
          No posts yet.
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      {/* posts */}
      <section className="pt-4 pb-3">
        <Container>
          <Masonry
            breakpointCols={{default: 4, 1450: 3, 767: 2, 500: 1}}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {posts.map(post => {
              return (
                <PostItem post={post} key={post.fields.slug} />
              )
            })}
          </Masonry>
        </Container>
      </section>

    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          thumbnail
        }
      }
    }
  }
`
