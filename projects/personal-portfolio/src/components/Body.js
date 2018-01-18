import React from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Portfolio from "./Work";
import Navigation from "./Navigation";
import Banner from "./Banner";
import Contact from "./Contact";

export default function Body() {
  return (
    <div>
      <Navigation />
      <Banner />
      <div className="section" id="about">
        <Grid>
          <Row className="show-grid">
            <Col md={4} sm={12}>
              <i className="fa fa-paint-brush" aria-hidden="true"></i>
              <h3 className="icon-header">Design</h3>
              <p className="copy">I'll design your website with your company in mind! I want to make sure you get the perfect product to show the world!</p>
            </Col>
            <Col md={4} sm={12}>
              <i className="fa fa-code" aria-hidden="true"></i>
              <h3 className="icon-header">Code</h3>
              <p className="copy">Once the design of your website is done the coding starts! I'll periodically check in with you during the development process, and make sure your project is going exactly how you want it to!</p>
            </Col>
            <Col md={4} sm={12}>
              <i className="fa fa-rocket" aria-hidden="true"></i>
              <h3 className="icon-header">Launch</h3>
              <p className="copy">Once we get to the Launch phase it's time to show the world what you have in store. I'll be there to help, and support you the entire way with any revisions you may want on your brand new website!</p>
            </Col>
          </Row>
      </Grid>
    </div>

    <div className="section colored">
      <Portfolio />
    </div>
    <Contact />
  </div>
  )
}
