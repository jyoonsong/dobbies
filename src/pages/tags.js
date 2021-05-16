import * as React from "react"
import { Link, graphql } from "gatsby"
import { Container } from 'react-bootstrap'
import { TagCloud } from 'react-tagcloud'

import Layout from "../components/layout"
import Seo from "../components/seo"

const Tags = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const tags = data.allMarkdownRemark.group

  const options = {
    luminosity: 'light',
    hue: 'blue',
  }

  const tagData = tags.map(({ tag, totalCount }) => ({ value: tag, count: totalCount }));

  console.log(tagData)

  const styles = {
    margin: '0px 3px',
    verticalAlign: 'middle',
    display: 'inline-block',
  }

  const customRenderer = (tag, size, color) => {
    const { className, style, ...props } = tag.props || {}
    const fontSize = size + 'px'
    const key = tag.key || tag.value
    const tagStyle = { ...styles, color, fontSize, ...style }
  
    let tagClassName = 'tag-cloud-tag'
    if (className) {
      tagClassName += ' ' + className
    }
  
    return (
      <Link to={`/tags/${tag.value}`} className={tagClassName} style={tagStyle} key={key} {...props}>
        {tag.value} ({tag.count})
      </Link>
    )   
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      {/* tags */}
      <section className="pt-4 pb-3">
        <Container>
            <TagCloud
                className="justify-content-center align-items-center d-flex"
                minSize={12}
                maxSize={35}
                colorOptions={options}
                tags={tagData}
                renderer={customRenderer}
            />
        </Container>
      </section>

    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
    }
  }
`
