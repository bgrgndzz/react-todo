import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" placeholder="Create a new task" onChange={this.props.handleChange} value={this.props.todoInput} />
          <button>
            <span>+</span>
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
