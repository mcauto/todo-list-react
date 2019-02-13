import React, { Component } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

// TodoList 리스트가 들어있는 컴포넌트
class TodoList extends Component {
  render() {
    // distructuring assigning 비 구조 할당
    // list
    const { todos } = this.props;
    // function
    const { onRemove, onDone } = this.props;
    return (
      <div>
        <ul>
          {todos.map(todo => {
            return (
              <TodoItem
                onRemove={onRemove}
                onDone={onDone}
                key={todo.ID}
                todo={todo}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
