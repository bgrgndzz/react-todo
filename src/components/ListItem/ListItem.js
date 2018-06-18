import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  render() {    
    return (
      <li className={this.props.todo.done ? 'ListItem done' : 'ListItem'}>
        <span>{this.props.todo.value}</span>
        <button onClick={(event) => this.props.handleDone(event, this.props.id)}>
          {this.props.todo.done ? 'Undo' : 'Do'}
        </button>
      </li>
    );
  }
}

export default ListItem;
