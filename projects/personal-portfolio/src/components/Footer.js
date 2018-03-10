import React from "react";
import {Grid, Row, Col, Nav, NavItem} from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Grid>
        <Row>
          <Col sm={12} md={4}>
            <p className="footer-copyright">&copy;2018 - Frank Delaguila</p>
          </Col>

          <Col sm={12} md={4}>

          </Col>

          <Col sm={12} md={4}>
            <Nav pullRight>
                <NavItem rel="noopener noreferrer" target="_blank" eventKey={1} href="https://github.com/franky212"><i className="fab fa-github"></i></NavItem>
                <NavItem rel="noopener noreferrer" target="_blank" eventKey={1} href="https://www.linkedin.com/in/frank-delaguila/"><i className="fab fa-linkedin" aria-hidden="true"></i></NavItem>
                <NavItem rel="noopener noreferrer" target="_blank" eventKey={1} href="https://www.facebook.com/frank.delaguila212"><i className="fab fa-facebook" aria-hidden="true"></i></NavItem>
                <NavItem rel="noopener noreferrer" target="_blank" eventKey={1} href="https://twitter.com/DelaguilaDesign"><i className="fab fa-twitter" aria-hidden="true"></i></NavItem>
            </Nav>
          </Col>
        </Row>
      </Grid>
    </footer>
  )
}
