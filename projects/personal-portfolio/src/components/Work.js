import React, {Component} from "react";
import {Grid, Row, Col, Modal, Button} from "react-bootstrap";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false
    }
  }

  render() {
    const styles = {
      workCard1: {
        backgroundImage: `url(${require("../img/work1.jpg")})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        color: "#fff",
        marginTop: "30px"
      },
      workCard2: {
        backgroundImage: `url(${require("../img/work2.jpg")})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        color: "#fff",
        marginTop: "30px"
      },
      workCard3: {
        backgroundImage: `url(${require("../img/cyberpunk2047.png")})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        color: "#fff",
        marginTop: "30px"
      }
    }
    return (
      <Grid id="portfolio">
        <Row>
          <Col xs={12}>
            <h2 className="section-header">WEB DESIGN AND DEVELOPMENT PROJECTS</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <div>
              <div style={styles.workCard1} onClick={() => this.setState({showModal1: true})} className="work-card">
                <div className="overlay">
                  <h4 className="box-text">Omnifood</h4>
                </div>
              </div>
              <Modal bsSize="large" show={this.state.showModal1} onHide={() => this.setState({showModal1: false})}>
                <Modal.Header closeButton>
                  <Modal.Title>Omnifood</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img className="modal-img" alt="Example 1 for Omnifood by Frank Delaguila" src={require("../img/work1.jpg")} />
                  <p>I wanted to create portfolio work that I could be proud of, so I decided to make a small one page fictional business website. The site is fully responsive, and comes with a mobile menu as well. The premise is a food delivery site that highlights their mobile application, locations, reviews, pricing, and a way to get in contact with them. You can view it here: <a rel="noopener noreferrer" target="_blank" href="http://frankdelaguila-omnifood.surge.sh/">Omnifood Example</a></p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => this.setState({showModal1: false})}>Close</Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div>
              <div style={styles.workCard2} onClick={() => this.setState({showModal2: true})} className="work-card">
                <div className="overlay">
                  <h4 className="box-text">What's Going On</h4>
                </div>
              </div>
              <Modal bsSize="large" show={this.state.showModal2} onHide={() => this.setState({showModal2: false})}>
                <Modal.Header closeButton>
                  <Modal.Title>What's Going On</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img className="modal-img" alt="Example 2 for What's Going On by Frank Delaguila" src={require("../img/work2.jpg")} />
                  <p>I’ve been working on a React based app called What’s Going On in my spare time as project work. The premise is having an interactive way to view events that are near a user as well as business' being able to post events to the map for users to see. You can check it out here: <a rel="noopener noreferrer" target="_blank" href="http://whats-going-on.surge.sh">What's Going On Example</a></p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => this.setState({showModal2: false})}>Close</Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
          <Col sm={12} md={12}>
            <div>
              <div style={styles.workCard3} onClick={() => this.setState({showModal3: true})} className="work-card">
                <div className="overlay">
                  <h4 className="box-text">Full-Stack React-Redux Mini-RPG with user auth</h4>
                </div>
              </div>
              <Modal bsSize="large" show={this.state.showModal3} onHide={() => this.setState({showModal3: false})}>
                <Modal.Header closeButton>
                  <Modal.Title>Cyberpunk 2047</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img className="modal-img" alt="Example 3 for Cyberpunk 2047 by Frank Delaguila" src={require("../img/cyberpunk2047.png")} />
                  <p>This was a group full-stack project <a rel="noopener noreferrer" target="_blank" href="#">LINK COMING SOON</a></p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => this.setState({showModal3: false})}>Close</Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
          </Row>
      </Grid>
    )
  }
}
