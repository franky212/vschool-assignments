import React, {Component} from "react";

import List from "./List";

class Input extends Component {
    constructor() {
        super();
        this.state = {
            word: "",
            newItem: []
        };
        this.updateInput = this.updateInput.bind(this);
        this.submitName = this.submitName.bind(this);
    }

    updateInput(event) {
      this.setState({word: event.target.value});
    }

    submitName(e){
      e.preventDefault();
      this.setState(prevState => {
        const newItem = [...prevState.newItem];
        newItem.unshift(prevState.word);
        return {newItem}
      });
      this.setState({word: ''});
    }

    deleteName(index) {
      this.setState(prevState => {
        const newItem = [...prevState.newItem];
        newItem.splice(index, 1);
        return {newItem}
      })
    }

    render(){
      const namesList = this.state.newItem.map((name, i) => {
        return <List name={name} key={name+i} delete={() => this.deleteName(i)}/>
      });
        return (
            <div>
              <form onSubmit={this.submitName}>
                <input onChange={this.updateInput} value={this.state.word}/>
                <button>submit</button>
              </form>

                <h1>{this.state.word}</h1>
                <ul>
                  {namesList}
                </ul>
            </div>
        )
      }
    }

export default Input;
