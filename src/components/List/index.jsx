import React, { Component } from 'react';
import ListItem from 'components/ListItem';
import './index.css';

class List extends Component {
  render() {
    return (
      <ul className="List">
        {this.props.todos.map((todo, index) => (
          <ListItem
            key={index}
            id={index}
            todo={todo}
            handleDone={this.props.handleDone}
          />
        ))}
      </ul>
    );
  }
}

export default List;
