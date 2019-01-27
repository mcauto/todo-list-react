import React, { Component } from "react";
import "./CreateForm.css";
import onChange from "../common/onChange";

class CreateForm extends Component {
  state = {
    input: ""
  };
  // 등록하기 위한 함수
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.input) {
      alert("입력해라 좋은 말로 할 때");
    } else {
      this.props.onCreate(this.state.input);
      this.setState({
        input: ""
      });
    }
  };

  render() {
    const { input } = this.state;
    // 여기 return은 html
    return (
      <form className="CreateForm" onSubmit={this.onSubmit}>
        {/* 변경될 때 마다 체크? 검색용으로도 쓸 수 있을 듯  */}
        <input onChange={onChange.bind(this)} value={input} />
        <button>추가</button>
      </form>
    );
  }
}

export default CreateForm;
