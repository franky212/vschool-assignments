import React, {Component} from "react";
import Navigation from "./components/Navigation";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Body />
        <Footer />
      </div>
    );
  }
}
