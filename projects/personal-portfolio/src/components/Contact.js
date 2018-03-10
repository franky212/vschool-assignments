import React, {Component} from "react";
import {Grid, Row, Col} from "react-bootstrap";
// const nodemailer = require('nodemailer');

export default function Contact() {
  const styles = {
    section: {
      padding: '6em 0'
    }
  }
  return (<section style={styles.section} id="contact">
    <Grid>
      <Row>
        <Col xs={12}>
          <h3 className="section-header contact-header">Contact</h3>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <h2 className="contact-copy">Feel free to contact me.</h2>
        </Col>
        <Col className="contact-container" sm={12} md={6}>
          <h3>
            <i className="fa fa-envelope contact-fa" aria-hidden="true"></i>
            <a href="mailto:frank.delaguila@delaguiladesign.com">frank.delaguila@delaguiladesign.com</a>
          </h3>
          <h3>
            <i className="fa fa-phone-square contact-fa" aria-hidden="true"></i>
            <a href="tel:1-435-256-1964">(435) 256-1964</a>
          </h3>
        </Col>
      </Row>
    </Grid>
  </section>)
}
