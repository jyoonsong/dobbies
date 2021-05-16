import * as React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Badge from "../utils/Badge"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Container>
        <Row>
          <Col xs={12} lg={{ span: 8, offset: 2 }}>
            <section
              className="blog-post"
              itemScope
              itemType="http://schema.org/Article"
              className="my-5 px-1 px-md-3"
            >
              
                <header className="mb-5">
                  <h1 className="headline" itemProp="headline">{post.frontmatter.title}</h1>
                  <p className="text-muted">{post.frontmatter.date}</p>
                </header>

                <article
                  dangerouslySetInnerHTML={{ __html: post.html }}
                  itemProp="articleBody"
                />

                <div className="my-5">
                  {post.frontmatter.tags ? post.frontmatter.tags.map((tag, i) => 
                      <Badge tagName={tag} key={i}/>
                  ): ""}
              </div>

                <hr />
            </section>
          </Col>
        </Row>
        <Row className="blog-post-nav text-center">
          <Col xs={6}>
              {previous && (
                <Link className="arrow before text-primary" to={previous.fields.slug} rel="prev">
                  {previous.frontmatter.title} &nbsp; <b>Previous</b> 
                </Link>
              )}
          </Col>
          <Col xs={6}>
              {next && (
                <Link className="arrow after text-primary" to={next.fields.slug} rel="next">
                  <b>Next</b> &nbsp; {next.frontmatter.title}
                </Link>
              )}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
