import React, {Component} from "react";
import {Col} from "react-bootstrap";

class Spot extends Component {
  render() {
    const styles = {
      backgroundImage: "url('"+this.props.imgUrl+"')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "100% 100%",
      backgroundSize: "cover",
    }
    return (
      <div>
        <Col md={3} sm={12}>
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
