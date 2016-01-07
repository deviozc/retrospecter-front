'use strict';

import React from 'react';

import BoardActionsCreator from '../actions/BoardActionsCreator';
import BoardStore from '../stores/BoardStore';

require('styles//Board.css');

class Item extends React.Component {
  render() {
    return (
      <li><button type="submit" onClick={this.fetchBoards.bind(this)}>{this.props.data.name}</button></li>
    );
  }

  fetchBoards(event) {
    event.preventDefault();
  }
};

let getStateFromStore = () => {
  return {
    boards: BoardStore.getAll()
  };
}

class Boards extends React.Component {
  constructor() {
    super();

    this.state = {
      boards: []
    };
  }

  componentDidMount() {
    BoardStore.addChangeListener(this._onChange.bind(this));
    BoardActionsCreator.getBoards('some_id');
  }

  componentWillUnmount() {
    BoardStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState(getStateFromStore());
  }

  render() {
    return (
      <div className="boards-component">
        Please edit src/components///BoardComponent.js to update this component!
        <ul>
          {this.state.boards.map((result) => {
            return <Item key={result.id} id={result.id} data={result} />
          })}
        </ul>
      </div>
    );
  }
}

Boards.displayName = 'BoardsComponent';

// Uncomment properties you need
// BoardComponent.propTypes = {};
// BoardComponent.defaultProps = {};

export default Boards;
