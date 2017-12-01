import React, {Component} from "react";
import {connect} from "react-redux";
import {addFavorite} from "../redux/favorites";

class AddFavoriteForm extends Component {
  constructor() {
    super();
    this.state = {
      favoriteItem: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addFavorite(this.state);
    this.setState({
      favoriteItem: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          name="favoriteItem"
          type="text"
          placeholder="Your favorite thing to do"
          value={this.state.favoriteItem}/>
          <button>Add Favorite</button>
      </form>
    )
  }
}

export default connect(null, {addFavorite})(AddFavoriteForm)
