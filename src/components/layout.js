import React from "react"

import Navigation from "./Navigation"
import Footer from "./Footer"

const Layout = ({ location, title, children }) => {
  // const [loading, setLoading] = useState(true)
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="wrapper" data-is-root-path={isRootPath}>
        {/* navigation bar */}
        <Navigation title={title} isRootPath={isRootPath} />

        {/* content */}
        <main>{children}</main>

        {/* footer */}
        <Footer />
    </div>
  )
}

export default Layout
