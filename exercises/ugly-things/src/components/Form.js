import React, {Component} from "react";
import {connect} from "react-redux";

import {addUgly} from "../redux/uglies";

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      imgUrl: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addUgly(this.state);
    this.setState({
      title: "",
      description: "",
      imgUrl: ""
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="title"
          onChange={this.handleChange}
          value={this.state.title} />
        <input
          name="description"
          type="text"
          placeholder="description"
          onChange={this.handleChange}
          value={this.state.description} />
        <input
          name="imgUrl"
          type="text"
          placeholder="img-url"
          onChange={this.handleChange}
          value={this.state.imgUrl} />
        <button >Submit</button>
      </form>
    )
  }
}

export default connect(null, {addUgly})(Form);
