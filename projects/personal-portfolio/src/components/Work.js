import React, {Component} from "react";
import {Grid, Row, Col} from "react-bootstrap";

export default class Portfolio extends Component {
  render() {
    const styles = {
      img: {
        maxWidth: '100%'
      },
      row: {
        marginTop: '60px'
      },
      p: {
        color: 'white'
      }
    }
    return (<Grid id="portfolio">
      <Row>
        <Col xs={12}>
          <h2 className="section-header">WEB DESIGN AND DEVELOPMENT PROJECTS</h2>
        </Col>
      </Row>
      <Row style={styles.row}>
        <Col md={6}>
          <a rel="noreferrer noopener" target="_blank" href="http://whats-going-on.surge.sh/" className="project-header">
            <h2>What's Going On? &raquo;</h2>
          </a>
          <p style={styles.p} className="lead">This React / Redux project incorporates multiple APIs (TicketMaster, Google Maps, and Googles Geocoding API) to allow a user to search for an artist, select an event with that artist, and place a clickable Google Map pin so they are able to purchase a ticket from Ticket Master.</p>
        </Col>
        <Col md={6}>
          <img style={styles.img} src={require("../img/work2.jpg")} alt="What's Going On example" />
        </Col>
      </Row>
      <Row style={styles.row}>
        <Col md={6}>
          <a rel="noreferrer noopener" target="_blank" className="project-header" href="https://cyberpunk2047.herokuapp.com/">
            <h2>CyberPunk 2047 &raquo;</h2>
          </a>
          <p style={styles.p} className="lead">Upon login, users are redirected to the character screen where they are able to view stats such as HP & Currency, as well as the current items in their inventory. In the shop, users are able to purchase items with currency for use in battle. In the battle screen, users are able to fight enemies for currency and item drops. There are two conditional renders, for the Game Over and Win screens.</p>
        </Col>
        <Col md={6}>
          <img style={styles.img} src={require("../img/cyberpunk2047.png")} alt="Login Screen for Cyberpunk 2047" />
        </Col>
      </Row>
    </Grid>)
  }
}
