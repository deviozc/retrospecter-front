'use strict';

import React from 'react';

import ItemStore from '../stores/ItemStore';

let getStateFromStore = () => {
  let state = {};

  let items = ItemStore.getAll();

  for (let item of items) {
    if (state[item.type]) {
      state[item.type].push(item);
    } else {
      state[item.type] = [item]
    }
  }

  return state;
};

class Board extends React.Component {
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
      </div>
    )
  }
}

export default Board
