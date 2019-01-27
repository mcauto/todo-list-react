import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const { todo } = this.props;
    return (
      <div className="TodoItem">
        <div className="check">&#10004;</div>
        <div className="text">{todo.text}</div>
        <div className="remove">[지움]</div>
      </div>
    );
  }
}

export default TodoItem;
