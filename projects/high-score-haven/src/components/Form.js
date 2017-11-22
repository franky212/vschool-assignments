import React, {Component} from "react";
import Display from "./Display";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      game: "",
      date: "",
      highScore: "",
      isChecked: false,
      scores: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  trashTalk() {
    const trash = ["That's trash dawg get it off the airwaves", "You're trash", "Git Gud", "You're a dumpster fire"];
    return trash[Math.floor(Math.random() * trash.length)];
  }

  handleInputChange(e) {
    if(e.target.type === "checkbox") {
      this.setState({isChecked: e.target.checked});
    } else {
      this.setState({[e.target.name]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => {
      let trash = this.trashTalk();
      if(!this.state.isChecked) {
        trash = "I am a good person";
      } else {
        trashTalk: trash;
      }
      prevState.scores.push({
        name: prevState.name,
        game: prevState.game,
        date: prevState.date,
        highScore: prevState.highScore,
        isChecked: prevState.isChecked,
        trashTalk: trash
      })
      return {scores: prevState.scores};
    });
  }

  render() {
    const display = this.state.scores.map((score, index) => {
      return <Display key={score + index} score={score} />
    });
    return(
      <div className="container">
        <input required onChange={this.handleInputChange} name="name" placeholder="Title" />
        <input onChange={this.handleInputChange} name="game" placeholder="Game" />
        <input onChange={this.handleInputChange} type="date" name="date" />
        <input onChange={this.handleInputChange} name="highScore" placeholder="Your High Score" />
        <input onChange={this.handleInputChange} type="checkbox" name="isChecked" />Trash Talk
        <button onClick={this.handleSubmit}>Submit</button>

        {display}
      </div>
    )
  }
}
