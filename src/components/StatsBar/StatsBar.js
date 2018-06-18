import React, { Component } from 'react';
import './StatsBar.css';

class StatsBar  extends Component {
  render() {
    return (
      <div className="StatsBar">
        <span className="stat--total">{this.props.total} total</span>
        <span className="stat--done">{this.props.done} done</span>
        <span className="stat--todo">{this.props.todo} to do</span>
      </div>
    );
  }
}

export default StatsBar;