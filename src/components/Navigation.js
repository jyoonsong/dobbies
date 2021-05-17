import * as React from "react"
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from "gatsby"

const Navigation = ({ title, isRootPath }) => {

  return (
    <header className="global-header">
        <Navbar expand="lg px-0">
            <Container className="px-3">

                <Navbar.Brand href="/">{title}</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/members">Members</Link>
                        <Link className="nav-link" to="/blog">Blog</Link>
                        <Link className="nav-link" to="/tags">Tags</Link>
                    </Nav>

                    <Form inline className="pb-2 pb-lg-0">
                        <FormControl type="text" placeholder="e.g., visualization" className="mr-sm-2" />
                        <Button variant="outline-primary" onClick={() => alert("준비중")}>search</Button>
                    </Form>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    </header>
  )
}

export default Navigation