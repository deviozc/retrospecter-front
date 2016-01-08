'use strict';

import React from 'react';
import { Link } from 'react-router';

import BoardActionsCreator from '../actions/BoardActionsCreator';
import BoardStore from '../stores/BoardStore';

require('styles/Boards.css');

let BoardItemContainer = React.createClass({
  render() {
    return (
      <div className="row text-center">
        <div className="col-lg-12 board-item-list">
          <div className="row ">
            {this.props.data.map((item) => {
              return <BoardItem key={item.id} id={item.id} data={item} />
            })}
          </div>
        </div>
      </div>
    );
  }
});

let BoardItem = React.createClass({
  render() {
    return (
      <div className="col-md-3 col-sm-6">
        <div className="board-item">
          <span className="fa-stack fa-3x">
            <i className="fa fa-circle fa-stack-2x text-dark"></i>
            <i className="fa fa-pencil-square-o fa-stack-1x text-white"></i>
          </span>
          <h4>
            <strong>{this.props.data.name}</strong>
          </h4>

          <p>Date: Jan 6, 2016</p>

          <p>Period: 1 hrs</p>
          <Link to={`/boards/${this.props.id}`} className="btn btn-dark">More Info</Link>
        </div>
      </div>
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
    BoardActionsCreator.getBoards(this.props.params.id);
  },

  componentWillUnmount() {
    BoardStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(getStateFromStore());
  },

  render() {
    return (
      <section id="team" className="team-page bg-secondary">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>Team Name</h2>
              <hr className="small" />
              </div>
              <div className="col-lg-12 text-right ">
                <button type="button" data-toggle="modal" data-target="#AddBoard" className="btn btn-dark ">Add Board <span
                  className="fa-stack fa-1x">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-plus fa-stack-1x text-dark"></i>
                </span></button>
              </div>
              <BoardItemContainer data={this.state.boards} teamId={this.props.params.id} />
            </div>
          </div>
        </section>
      );
  }
});

Boards.displayName = 'BoardsComponent';

// Uncomment properties you need
// BoardComponent.propTypes = {};
// BoardComponent.defaultProps = {};

export default Boards;
