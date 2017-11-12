import React from "react";

import {Well, Col} from "react-bootstrap";

function WellItems(props) {
  const styles = {
    backgroundColor: props.backgroundColor
  }
  return (
    <Col xs={4}>
      <Well style={styles}>
        <h2>{props.content}</h2>
        <p>{props.description}</p>
      </Well>
    </Col>
  )
}

export default WellItems;
