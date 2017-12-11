import React, {Component} from "react";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Banner />
        <Body />
        <Contact />
        <Footer />
      </div>
    );
  }
}
