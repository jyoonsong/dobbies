import * as React from "react"
import { Link } from "gatsby"

const Tag = ({ tagName }) => {

  return (
    <Link to={`/tags/${tagName}`} className="badge">
        {tagName}
    </Link>
  )
}

export default Tag