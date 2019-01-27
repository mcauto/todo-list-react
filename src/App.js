import React, { Component } from "react";
import "./App.css";
import CreateForm from "./components/CreateForm";
import TodoList from "./components/TodoList";

class App extends Component {
  id = 3;
  state = {
    // 그 초깃값은 배열 형태로 넣어주었고, 내부에 기본 값들을 넣어주었습니다.
    todos: [
      {
        id: 0,
        text: "앵귤러 배우고",
        checked: true
      },
      {
        id: 1,
        text: "리액트 배우고",
        checked: false
      },
      {
        id: 2,
        text: "뷰 배우자",
        checked: false
      }
    ]
  };
  handleCreate = input => {
    const todo = {
      id: ++this.id,
      text: input,
      checked: false
    };
    this.setState({
      todos: this.state.todos.concat(todo)
    });
  };
  handleRemove = id => {
    this.setState({
      todos: this.state.todos.filter(todo => {})
    });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <CreateForm onCreate={this.handleCreate} />
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
