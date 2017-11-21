import React, {Component} from "react";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Banner />
      </div>
    );
  }
}
