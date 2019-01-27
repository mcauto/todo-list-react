import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    // distructuring assigning 비 구조 할당
    // list
    const { todo } = this.props;
    // function
    const { onRemove, onDone } = this.props;
    return (
      <div
        className={`TodoItem ${todo.checked && "active"}`}
        onClick={e => {
          onDone(todo.id);
        }}
      >
        <div className="check">&#10004;</div>
        <div className="text">{todo.text}</div>
        <div
          className="remove"
          onClick={e => {
            onRemove(todo.id);
            e.stopPropagation();
          }}
        >
          [지움]
        </div>
      </div>
    );
  }
}

export default TodoItem;
