import React, { Component } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div>
        <ul>
          {todos.map(todo => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
