import * as React from "react"
import { Link, graphql } from "gatsby"
import { Container } from 'react-bootstrap'
import Masonry from 'react-masonry-css'

import Intro from "../components/Intro"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostItem from "../components/PostItem"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Home" />
        <Intro />
        <p>
          No posts yet.
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />

      {/* short introduction */}
      <Intro />

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
          <div className="mt-4 mb-2 text-center">
              <Link to="/blog" className="text-primary arrow after">더 많은 글 보러 가기</Link>
          </div>
        </Container>
      </section>

    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 6) {
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
          author
        }
      }
    }
  }
`
