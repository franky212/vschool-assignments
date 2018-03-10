import React from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Portfolio from "./Work";
import Navigation from "./Navigation";
import Banner from "./Banner";
import Contact from "./Contact";

export default function Body() {
  const styles = {
    section: {
      position: 'relative',
      padding: '6em 0'
    },
    colored: {
      backgroundImage: `linear-gradient(to right, rgba(54,209,220, 0.5), rgba(91,134,229, 0.5)), url(${require("../img/section-bg.jpg")})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      padding: '6em 0'
    },
    img: {
      width: '75%'
    }
  }
  return (
    <div>
      <Navigation />
      <Banner />
      <div style={styles.section} id="about">
        <Grid>
          <Row className="show-grid">
            <Col md={6}>
              <p className="lead">Hi! My name is Frank Delaguila. I'm a Web Developer with Full-Stack JavaScript experience, as well as Graphic Design experience. I'm a firm believer that tech and design are the greatest way to simplify communications, elevate experiences, and engage as well as inspire people around the world. Great technology and design come from collaboration, and I'm excited to start a dialouge with you!</p>
            </Col>
            <Col md={6}>
              <img style={styles.img} src={require("../img/frank.jpg")} alt="Frank Delaguila Headshot"/>
            </Col>
          </Row>
      </Grid>
    </div>

    <div style={styles.colored}>
      <Portfolio />
    </div>
    <Contact />
  </div>
  )
}
