import React, {Component} from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "Chose not to disclose",
      location: "Hell",
      options: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputsChange = this.handleInputsChange.bind(this);
  }

  handleInputsChange(e) {
    this.setState({[e.target.name]: e.target.value});
    const options = this.state.options;
    let index;

    if(e.target.type === "checkbox" && e.target.checked) {
      options.push(e.target.value);
    } else if(e.target.type === 'checkbox' && !e.target.checked) {
      index = options.indexOf(e.target.value);
      options.splice(index, 1);
    }
    this.setState({options: options});
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(`Name: ${this.state.firstName} ${this.state.lastName}\nAge: ${this.state.age}\nGender: ${this.state.gender}\nLocation: ${this.state.location}\nDietary Needs:  ${this.state.options}`);
  }

  render() {
    return (
      <div className="container">
        <form>
          <input name="firstName" placeholder="First Name" onChange={this.handleInputsChange} value={this.state.firstName} />
          <input name="lastName" placeholder="Last Name" onChange={this.handleInputsChange} value={this.state.lastName} />
          <input type="number" name="age" placeholder="Age" onChange={this.handleInputsChange} value={this.state.age} />
          Male: <input onClick={this.handleInputsChange} type="radio" name="gender" value="male" />
          Female: <input onClick={this.handleInputsChange} type="radio" name="gender" value="female" />
          Location: <select onChange={this.handleInputsChange} name="location">
            <option value="Hell">Hell</option>
            <option value="Seattle">Seattle</option>
            <option value="California">California</option>
          </select>
          Vegetarian: <input onChange={this.handleInputsChange} name="options" type="checkbox" value={"Vegetarian"} />
          Kosher: <input onChange={this.handleInputsChange} name="options" type="checkbox" value={"Kosher"} />
          Lactose Free: <input onChange={this.handleInputsChange} name="options" type="checkbox" value={"Lactose Free"} />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default App;
