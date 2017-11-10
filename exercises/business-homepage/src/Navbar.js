import React from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";

function NavbarContainer() {
  const styles = {
    navbar: {
      borderRadius: 0,
      padding: "10px",
      background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
      border: "none"
    }
  };
  return (
    <Navbar style={styles.navbar} fixedTop inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">BEARDEDCREW</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="https://www.google.com/">Home</NavItem>
          <NavItem eventKey={2} href="https://www.google.com/">About</NavItem>
          <NavItem eventKey={1} href="https://www.google.com/">Products</NavItem>
          <NavItem eventKey={1} href="https://www.google.com/">Contact</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarContainer;
