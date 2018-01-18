import React, {Component} from "react";
import Body from "./components/Body";
import Cyberpunk from "./components/Cyberpunk";
import Omnifood from "./components/Omnifood";
import Whatsgoingon from "./components/Whatsgoingon";
import {Switch, Route} from 'react-router-dom';
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Body}/>
          <Route path="/cyberpunk" component={Cyberpunk} />
          <Route path="/omnifood" component={Omnifood} />
          <Route path="/whatsgoingon" component={Whatsgoingon} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
