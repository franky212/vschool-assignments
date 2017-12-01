import React from "react";
import {Grid, Row, Col} from "react-bootstrap";
import WorkCard from "./WorkCard";

export default function Portfolio() {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h2 className="section-header">PORTFOLIO</h2>
        </Col>
      </Row>
      <Row>
        <WorkCard backgroundImg={require("../img/work1.jpeg")} heading="Work 1" description="FUCKING WORK BRO"/>
        <WorkCard heading="Work 2" description="WHAT AM I DOING WITH MY LIFE"/>
        <WorkCard heading="Work 3" description="KILL ME"/>
      </Row>
    </Grid>
  )
}
