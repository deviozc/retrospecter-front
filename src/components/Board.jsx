'use strict';

import React from 'react';

import ItemStore from '../stores/ItemStore';

let getStateFromStore = () => {
  let state = {};

  let items = ItemStore.getAll();

  for (let item of items) {
    if (state[item.category]) {
      state[item.category].push(item);
    } else {
      state[item.category] = [item]
    }
  }
  console.log(state);

  return state;
};

let Category = React.createClass({
  render() {
    return (
      <div>
        {this.props.data}
      </div>
    )
  }
});

class Board extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    ItemStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ItemStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getStateFromStore());
  }

  render() {
    return (
      <div className="board-item-component">
        Hello
        {Object.keys(this.state).map((key) => {
          console.log('hi');
          <Category key={key} data={this.state[key]} />
        })}
      </div>
    )
  }
}

export default Board
