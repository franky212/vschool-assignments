import React, {Component} from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: ""
    }
  }
  render() {
    return (
      <div>
        <form className="container">
          <input name="firstName" placeholder="First Name"/>
          <input name="lastName" placeholder="Last Name"/>
          <input name="age" placeholder="Age" />
          <form>
            <label for="male">Male: </label>
            <input type="radio" name="gender" value="male"/>
            <label for="female">Female: </label>
            <input type="radio" name="gender" value="female"/>
          </form>
          <select>
            <option>Saint George</option>
            <option selected>Seattle</option>
            <option>California</option>
          </select>
          <label>Vegetarian:</label>
          <input type="checkbox" value="vegetarian"/>
          <label>Kosher:</label>
          <input type="checkbox" value="Kosher"/>
          <label>Lactose Free:</label>
          <input type="checkbox" value="Lactose Free"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default App;
