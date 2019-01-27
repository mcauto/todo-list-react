import React, { Component } from "react";
import "./App.css";
import CreateForm from "./components/CreateForm";
import TodoList from "./components/TodoList";

class App extends Component {
  // 상태값을 저장
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

  // 생성하는 함수
  handleCreate = input => {
    let id = this.state.todos.length;
    const todo = {
      id: ++id,
      text: input,
      checked: false
    };
    this.setState({
      todos: this.state.todos.concat(todo)
    });
  };

  // 지우는 함수
  handleRemove = id => {
    this.setState({
      todos: this.state.todos.filter(todo => id !== todo.id)
    });
  };

  handleDone = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          return {
            ...todo, // 나머지는 알아서 다 집어넣기
            checked: !todo.checked
          };
        }
        return todo;
      })
    });
  };

  // 그려지는 부분
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <CreateForm onCreate={this.handleCreate} />
        <TodoList
          onRemove={this.handleRemove}
          onDone={this.handleDone}
          todos={todos}
        />
      </div>
    );
  }
}

export default App;
