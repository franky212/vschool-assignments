import React from "react";
import {Grid, Row, Col} from "react-bootstrap";
import WorkCard from "./WorkCard";

export default function Portfolio() {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h2 className="section-header">WEB DESIGN AND DEVELOPMENT PROJECTS</h2>
        </Col>
      </Row>
      <Row>
        <WorkCard
          backgroundImg={require("../img/work1.jpg")}
          heading="Omnifood"
          description="Work 1 Description"/>
        <WorkCard
          backgroundImg={require("../img/work2.jpg")}
          heading="What's Going On"
          description="WHAT AM I DOING WITH MY LIFE"/>
        </Row>
        <Row>
        <WorkCard
          heading="Work 3"
          description="WHAT IS GOING ON"/>
          <WorkCard
            heading="Work 4"
            description="SLOWLY GETTING THERE"/>
        </Row>
    </Grid>
  )
}
