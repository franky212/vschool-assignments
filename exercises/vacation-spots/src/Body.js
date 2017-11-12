import React, {Component} from "react";
import Navigation from "./Navigation";
import Spots from "./Vacationspots";
import {Grid, Row} from "react-bootstrap";
import "./App.css";
class Body extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="banner">
        </div>
        <Grid>
          <Row>
            <Spots />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Body;
