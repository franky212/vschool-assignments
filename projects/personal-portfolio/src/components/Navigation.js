import React from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import $ from "jquery";

export default function Navigation() {
  const logo = require("../img/DD-web-logo.png");
  const styles = {
    navbar: {
      padding: "10px",
      fontSize: "1.2em",
      backgroundColor: "transparent",
      border: "none"
    }
  }

  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 0);
  });

  return (
    <Navbar style={styles.navbar} inverse fixedTop>
      <Navbar.Header>
        <img src={logo} alt="Delaguila Design" width="300px" />
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={2} href="#">About</NavItem>
          <NavItem eventKey={3} href="#">Portfolio</NavItem>
          <NavItem eventKey={4} href="#">Contact</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
