import React, { Component } from "react";
import "./App.css";
import CreateForm from "./components/CreateForm";
import TodoList from "./components/TodoList";
import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  handleCreate = input => {
    const todo = {
      Title: input,
      Checked: false
    };
    axios({
      method: "post",
      url: "http://localhost:1323/api/v1/todos",
      data: todo
    })
      .then(response => {
        this.setState({
          todos: this.state.todos.concat(response.data)
        });
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  };

  // 지우는 함수
  handleRemove = id => {
    axios({
      method: "delete",
      url: "http://localhost:1323/api/v1/todos/" + id
    })
      .then(response => {
        this.setState({
          todos: this.state.todos.filter(todo => id !== todo.ID)
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleDone = id => {
    const todo = this.state.todos.filter(todo => id === todo.ID);

    axios
      .patch("http://localhost:1323/api/v1/todos/" + id, {
        Title: todo[0].Title,
        Checked: !todo[0].Checked
      })
      .then(response => {
        console.log(response);
        this.setState({
          todos: this.state.todos.map(todo => {
            if (id === todo.ID) {
              return {
                ...todo,
                Checked: !todo.Checked
              };
            }
            return todo;
          })
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    axios
      .get("http://localhost:1323/api/v1/todos")
      .then(response => {
        let todos = [];
        if (response.status === 200) {
          todos = response.data;
        }
        this.setState({
          todos: todos
        });
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }
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
