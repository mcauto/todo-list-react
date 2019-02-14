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
        className={`TodoItem ${todo.Checked && "active"}`}
        onClick={e => {
          onDone(todo.ID);
        }}
      >
        <div className="check">&#10004;</div>
        <div className="text">{todo.Text}</div>
        <div
          className="remove"
          onClick={e => {
            onRemove(todo.ID);
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
