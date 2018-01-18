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
    var winH = parseInt($( window ).height());

    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 0);
      var scrollY = parseInt($(window).scrollTop());
      $( ".banner" ).each(function(){
        var boxOffset = $(this).offset();
        var boxY = parseInt(boxOffset.top);

        // vertically calculated
        var new_opacity = 1+((boxY-scrollY)/winH);

        // horizontally calculated
        // var new_opacity = 1-((boxX-scrollX)/winW);
        new_opacity = (new_opacity<0)? 0: new_opacity;
        new_opacity = (new_opacity>1)? 1: new_opacity;
        $(".banner-text").css({'opacity': new_opacity});
        // $(this).text(new_opacity);
      });
    });

    $(document).ready(function(){
      $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 75
        }, 900, 'swing');
      });
    });
  });

  return (
    <div>
      <Navbar style={styles.navbar} inverse fixedTop>
        <Navbar.Header>
          <a href="/"><img src={logo} alt="Delaguila Design" width="300px" /></a>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav id="example-nav" pullRight>
            <NavItem eventKey={1} href="#banner">Home</NavItem>
            <NavItem eventKey={2} href="#about">About</NavItem>
            <NavItem eventKey={3} href="#portfolio">Portfolio</NavItem>
            <NavItem eventKey={4} href="#contact">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
