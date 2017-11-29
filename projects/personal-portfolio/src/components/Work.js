import React from "react";
import {Grid, Row, Col} from "react-bootstrap";

export default function WorkCard() {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h2 className="section-header">PORTFOLIO</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <div className="word-card">

          </div>
        </Col>
      </Row>
    </Grid>
  )
}
