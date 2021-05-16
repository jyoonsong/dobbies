import * as React from "react"
import { graphql } from "gatsby"
import { CardColumns, Container } from 'react-bootstrap'

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
          <CardColumns>
            {posts.map(post => {
              return (
                <PostItem post={post} key={post.fields.slug} />
              )
            })}
          </CardColumns>
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
        }
      }
    }
  }
`
