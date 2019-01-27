import React, { Component } from "react";
import "./CreateForm.css";
import onChange from "../common/onChange";

class CreateForm extends Component {
  state = {
    input: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state.input);
    this.setState({
      input: ""
    });
  };
  render() {
    const { input } = this.state;
    return (
      <form className="CreateForm" onSubmit={this.onSubmit}>
        <input onChange={onChange.bind(this)} value={input} />
        <button>추가</button>
      </form>
    );
  }
}

export default CreateForm;
