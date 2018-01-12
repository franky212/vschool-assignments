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
          description="I wanted to create portfolio work that I could be proud of, so I decided to make a small one page fictional business website. The site is fully responsive, and comes with a mobile menu as well. The premise is a food delivery site that highlights their mobile application, locations, reviews, pricing, and a way to get in contact with them. You can view it here: http://delaguiladesign.com/omnifood/index.html"/>
        <WorkCard
          backgroundImg={require("../img/work2.jpg")}
          heading="What's Going On"
          description="I’ve been working on a React based app called What’s Going On in my spare time as project work. The premise is having an interactive way to view events that are near a user as well as business' being able to post events to the map for users to see. You can check it out here whats-going-on.surge.sh"/>
        </Row>
    </Grid>
  )
}
