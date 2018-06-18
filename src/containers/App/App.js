import React, { Component } from 'react';
import List from 'components/List/List';
import Form from 'components/Form/Form';
import StatsBar from 'components/StatsBar/StatsBar';
import './App.css';

class App extends Component {
  // state
  state = {
    todos: [],
    todoInput: ''
  }

  // handlers
  handleChange = (event) => {
    this.setState({todoInput: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.todoInput) {
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
    }
  }
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
  }

  // helpers
  calculateStats = () => {
    const total = this.state.todos.length;
    const done = this.state.todos.filter(item => item.done).length;
    const todo = total - done;
    return {total, done, todo};
  }

  // render
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
        <StatsBar {...this.calculateStats()} />
      </div>
    );
  }
}

export default App;
