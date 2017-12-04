import React, {Component} from "react";
import {Col, Button, Modal} from "react-bootstrap";

export default class WorkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const styles = {
      workCard: {
        backgroundImage: `url(${this.props.backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        color: "#fff",
        marginTop: "30px"
      }
    }
    return (
      <Col sm={12} md={6}>
        <div>
          <div style={styles.workCard} onClick={this.open} className="work-card">
            <div className="overlay">
              <h4 className="box-text">{this.props.heading}</h4>
            </div>
          </div>

            <Modal bsSize="large" show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.heading}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>{this.props.description}</h4>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Col>
      )
    }
  }
