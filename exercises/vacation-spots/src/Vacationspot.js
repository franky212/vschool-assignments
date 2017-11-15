import React, {Component} from "react";
import {Col} from "react-bootstrap";

class Spot extends Component {
  render() {
    const styles = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${this.props.imgUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      width: "100%",
      height: "300px",
      padding: "20px",
      margin: "10px 0",
      color: "#fff"
    }
    return (
      <div>
        <Col md={6} sm={12}>
          <div style={styles} className="vacation-card">
              <h2>{this.props.place}</h2>
              <small>{this.props.price}</small>
              <p>Best time to go: {this.props.timeToGo}</p>
          </div>
        </Col>
      </div>
    );
  }
}

export default Spot;
