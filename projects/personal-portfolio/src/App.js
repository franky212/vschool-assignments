import React, {Component} from "react";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import Body from "./components/Body";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Banner />
        <Body />
      </div>
    );
  }
}
