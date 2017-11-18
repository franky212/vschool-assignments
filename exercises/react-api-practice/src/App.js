import React, {Component} from "react";

import axios from "axios";

import Person from "./Person";

class App extends Component {
  constructor() {
    super();
    this.state = {
      targets: []
    }
  }

  componentDidMount(e) {
    axios.get("http://api.vschool.io:6543/hitlist.json").then((response) => {
      this.setState({targets: response.data});
    });
  }

  render() {
    const styles = {
      heading: {
        textAlign: "center",
        padding: "25px"
      }
    }
    return (
      <div>
        <div style={styles.heading}>
          <h1>Hit List</h1>
        </div>
        <div className="container">
        {this.state.targets.map((person, key) => {
          return <Person key={person + '-' + key} info={person} />
        })}
      </div>
    </div>
    )
  }
}

export default App;
