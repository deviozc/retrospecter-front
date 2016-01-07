'use strict';

import React from 'react';

import BoardActionsCreator from '../actions/BoardActionsCreator';
import BoardStore from '../stores/BoardStore';

require('styles//Board.css');

let BoardItem = React.createClass({
  render() {
    return (
      <li><a href={'/#/boards/' + this.props.id}>{this.props.data.name}</a></li>
    );
  }
});

let getStateFromStore = () => {
  return {
    boards: BoardStore.getAll()
  };
}

let Boards = React.createClass({
  getInitialState() {
    return getStateFromStore();
  },

  componentDidMount() {
    BoardStore.addChangeListener(this._onChange);
    BoardActionsCreator.getBoards('41224d776a326fb40f000001');
  },

  componentWillUnmount() {
    BoardStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(getStateFromStore());
  },

  render() {
    if (!this.state.boards.length) {
      return (
        <div className="boards-component">
          No Board Items
        </div>
      )
    } else {
      return (
        <div className="boards-component">
          Please edit src/components///BoardComponent.js to update this component!
          <ul>
              {this.state.boards.map((result) => {
                return <BoardItem key={result.id} id={result.id} data={result} />
              })}
          </ul>
        </div>
      );
    }
  }
});

Boards.displayName = 'BoardsComponent';

// Uncomment properties you need
// BoardComponent.propTypes = {};
// BoardComponent.defaultProps = {};

export default Boards;
