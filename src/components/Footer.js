import * as React from "react"
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
 
    return (
      <footer className="my-5">
        <Container>
          <Row>
            <Col xs={{ span: 8, offset: 4}} className="text-right">
              <small className="text-muted">
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a> Starter Blog
              </small>
            </Col>
          </Row>
        </Container>
      </footer>
    )
}

export default Footer