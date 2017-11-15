import React, {Component} from "react";

class ColorChange extends Component {
    constructor() {
      super();
      this.state = {
        bgColor: "red"
      }
      this.handColorChange = this.handColorChange.bind(this);
    }

    handColorChange() {
      this.setState(prevState => {
        if(prevState.bgColor === "red") {
          return {bgColor: "blue"};
        } else {
          return {bgColor: "red"};
        }
      });
    }
    render() {
      const styles = {
        height: "100px",
        width: "100px",
        border: "5px solid blue",
        backgroundColor: this.state.bgColor,
        display: "inline-block"
      }
    return (
      <div style={styles} onClick={this.handColorChange}>

      </div>
    )
  };
}

export default ColorChange;
