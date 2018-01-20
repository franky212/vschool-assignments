import React, {Component} from "react";
import {Grid, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class Portfolio extends Component {
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
              <Link to="/omnifood"><div style={styles.workCard1} onClick={() => this.setState({showModal1: true})} className="work-card">
                <div className="overlay">
                  <h4 className="box-text">Omnifood</h4>
                </div>
              </div></Link>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div>
              <Link to="whatsgoingon"><div style={styles.workCard2} onClick={() => this.setState({showModal2: true})} className="work-card">
                <div className="overlay">
                  <h4 className="box-text">What's Going On</h4>
                </div>
              </div></Link>
            </div>
          </Col>
          <Col sm={12} md={12}>
            <div>
              <Link to="/cyberpunk"><div style={styles.workCard3} onClick={() => this.setState({showModal3: true})} className="work-card">
                <div className="overlay">
                  <h4 className="box-text">Full-Stack React-Redux Mini-RPG with user auth</h4>
                </div>
              </div></Link>
            </div>
          </Col>
          </Row>
      </Grid>
    )
  }
}
