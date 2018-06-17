import React, { Component } from 'react';
import List from 'components/List';
import Form from 'components/Form';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        value: 'hello',
        done: false
      },
      {
        value: 'yo',
        done: true
      }
    ],
    todoInput: ''
  }

  handleChange = (event) => {
    this.setState({todoInput: event.target.value});
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const todos = this.state.todos;
    const newTodo = {
      value: this.state.todoInput,
      done: false
    };
    todos.push(newTodo);
    
    this.setState({
      todos: todos,
      todoInput: ''
    });
  };
  handleDone = (event, id) => {
    event.preventDefault();

    const todos = this.state.todos.map((todo, index) => {
      if  (index === id) {
        return {
          ...todo,
          done: !todo.done
        };
      }

      return todo;    
    });
    this.setState({todos});
  };

  render() {
    return (
      <div className="App">
        <h1 className="heading">To Do List</h1>
        <List 
          todos={this.state.todos} 
          handleDone={this.handleDone}
        />
        <Form 
          todoInput={this.state.todoInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
