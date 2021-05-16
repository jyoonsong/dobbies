import * as React from "react"
import { Card } from 'react-bootstrap'
import { Link } from "gatsby"

import Badge from "../utils/Badge"

const PostItem = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug

  return (
    <Card
    itemScope
    itemType="http://schema.org/Article"
    key={post.fields.slug}
    className="mb-3"
    >
        <Link to={post.fields.slug} itemProp="url">
        
        { !post.frontmatter.thumbnail ?
            ""
            :
            <Card.Img src={post.frontmatter.thumbnail} />
        }

        <Card.Body>

            {/* post title & category */}
            <Card.Subtitle className="mb-2">
                <small className="text-primary">Jaewon Kim</small>
            </Card.Subtitle>

            <Card.Title itemProp="headline">{title}</Card.Title>

            {/* post description */}
            <Card.Text
                dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
                className="mb-2 text-muted"
            />

            {/* tags */}
            <div className="mb-2">
                {post.frontmatter.tags ? post.frontmatter.tags.map((tag, i) => 
                    <Badge tagName={tag} key={i}/>
                ): ""}
            </div>

            <Card.Text>
                {/* date */}
                <small className="text-muted">{post.frontmatter.date}</small>
            </Card.Text>

        </Card.Body>
        </Link>
    </Card>
  )
}

export default PostItem