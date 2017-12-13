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
  $(document).ready(function () {
    var winW = parseInt($( window ).width());
    var winH = parseInt($( window ).height());

    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $(".banner").height() - 80);
      var scrollX = parseInt($(window).scrollLeft());
      var scrollY = parseInt($(window).scrollTop());
      $( ".banner" ).each(function(){
        var boxOffset = $(this).offset();
        var boxX = parseInt(boxOffset.left);
        var boxY = parseInt(boxOffset.top);
        console.log(boxOffset.top);

        // vertically calculated
        var new_opacity = 1+((boxY-scrollY)/winH);

        // horizontally calculated
        // var new_opacity = 1-((boxX-scrollX)/winW);
        new_opacity = (new_opacity<0)? 0: new_opacity;
        new_opacity = (new_opacity>1)? 1: new_opacity;
        console.log(new_opacity);
        $(".banner-text").css({'opacity': new_opacity});
        // $(this).text(new_opacity);
      });
    });
  });

  return (
    <div>
      <Navbar style={styles.navbar} inverse fixedTop>
        <Navbar.Header>
          <a href="../../public/index.html"><img src={logo} alt="Delaguila Design" width="300px" /></a>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="../../public/index.html">Home</NavItem>
            <NavItem eventKey={2} href="#">About</NavItem>
            <NavItem eventKey={3} href="#">Portfolio</NavItem>
            <NavItem eventKey={4} href="#">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
