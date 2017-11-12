import React, {Component} from "react";

import {Nav, Navbar, NavItem} from "react-bootstrap";

class Navigation extends Component {
  render() {
    const styles = {
      borderRadius: 0,
      margin: 0
    }
    return (
      <Navbar style={styles} inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Vacations</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#">Vacations</NavItem>
            <NavItem eventKey={2} href="#">About</NavItem>
            <NavItem eventKey={2} href="#">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
