'use strict';

import React from 'react';

import BoardActionsCreator from '../actions/BoardActionsCreator';
import BoardStore from '../stores/BoardStore';

require('styles//Board.css');

class Item extends React.Component {
  render() {
    return (
      <li><a href={'/#/boards/' + this.props.id}>{this.props.data.name}</a></li>
    );
  }

  fetchBoards(event) {
    event.preventDefault();
    this.navigate('/#/boards/' + this.props.key);
  }
};

let getStateFromStore = () => {
  return {
    boards: BoardStore.getAll()
  };
}

let Boards = React.createClass({

  getInitialState: function() {
    return getStateFromStore();
  },

  componentDidMount() {
    BoardStore.addChangeListener(this._onChange);
    BoardActionsCreator.getBoards('some_id');
  },

  componentWillUnmount() {
    BoardStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    console.log('onchange')
    this.setState(getStateFromStore());
  },

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
});

Boards.displayName = 'BoardsComponent';

// Uncomment properties you need
// BoardComponent.propTypes = {};
// BoardComponent.defaultProps = {};

export default Boards;
