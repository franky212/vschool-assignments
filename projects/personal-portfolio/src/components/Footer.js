import React from "react";
import {Grid, Row, Col, Nav, NavItem} from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Grid>
        <Row>
          <Col sm={12} md={4}>
            <small className="footer-copyright">&copy;2017 - Frank Delaguila</small>
          </Col>

          <Col sm={12} md={4}>

          </Col>

          <Col sm={12} md={4}>
            <Nav pullRight>
                <NavItem target="_blank" eventKey={1} href="https://github.com/franky212"><i className="fa fa-github" aria-hidden="true"></i></NavItem>
                <NavItem target="_blank" eventKey={1} href="https://www.linkedin.com/in/frank-delaguila/"><i className="fa fa-linkedin" aria-hidden="true"></i></NavItem>
                <NavItem target="_blank" eventKey={1} href="https://www.facebook.com/delaguiladesign/"><i className="fa fa-facebook" aria-hidden="true"></i></NavItem>
                <NavItem target="_blank" eventKey={1} href="https://twitter.com/DelaguilaDesign"><i className="fa fa-twitter" aria-hidden="true"></i></NavItem>
            </Nav>
          </Col>
        </Row>
      </Grid>
    </footer>
  )
}
