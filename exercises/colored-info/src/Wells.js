import React from "react";

import {Grid, Row} from "react-bootstrap";

import Well from "./Well";

function Wells() {
  return (
    <div>
      <Grid>
        <Row>
          <Well backgroundColor="pink" content="Hi" description="I really hope I get picked up by a company."/>
          <Well backgroundColor="lightblue" content="Kill me" description="I'm using bootstrap"/>
          <Well backgroundColor="teal" content="Please kill me" description="I'm trying"/>
        </Row>
        <Row>
          <Well backgroundColor="pink" content="Hi" description="I really hope I get picked up by a company."/>
          <Well backgroundColor="lightblue" content="Kill me" description="I'm using bootstrap"/>
          <Well backgroundColor="teal" content="Please kill me" description="I'm trying"/>
        </Row>
        <Row>
          <Well backgroundColor="pink" content="Hi" description="I really hope I get picked up by a company."/>
          <Well backgroundColor="lightblue" content="Kill me" description="I'm using bootstrap"/>
          <Well backgroundColor="teal" content="Please kill me" description="I'm trying"/>
        </Row>
      </Grid>
    </div>
  );
}

export default Wells;
