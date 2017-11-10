import React from 'react';

import {Nav, Navbar, NavItem} from "react-bootstrap";

function Body() {
  const styles = {
    borderRadius: 0
  }
  return (
    <Navbar style={styles} inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Colored Info Boxes</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Link Right</NavItem>
          <NavItem eventKey={2} href="#">Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Body;
