'use strict';

import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';

import BoardActionsCreator from '../actions/BoardActionsCreator';
import BoardStore from '../stores/BoardStore';
import TeamStore from '../stores/TeamStore';

require('styles/Boards.css');

let BoardItemContainer = React.createClass({
  render() {
    return (
      <div className="row text-center">
        <div className="col-lg-12 board-item-list">
          <div className="row ">
            {this.props.data.map((item) => {
              return <BoardItem key={item._id} id={item._id} data={item} />
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
          <Link to={`/teams/${this.props.data.teamId}/boards/${this.props.id}`} className="btn btn-dark">More Info</Link>
        </div>
      </div>
    );
  }
});

let getStateFromStore = (teamId) => {
  return {
    boards: BoardStore.getAll(),
    team: TeamStore.getTeam(teamId) || {}
  };
}

const customStyle = {
  content: {
    border: 0
  }
};

let Boards = React.createClass({
  getInitialState() {
    return getStateFromStore(this.props.params.id);
  },

  componentDidMount() {
    BoardStore.addChangeListener(this._onChange);
    TeamStore.addChangeListener(this._onChange);
    BoardActionsCreator.getBoards(this.props.params.id);
  },

  componentWillUnmount() {
    TeamStore.removeChangeListener(this._onChange);
    BoardStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(getStateFromStore(this.props.params.id));
  },

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  },

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  },

  handleChange(e) {
    e.preventDefault();
    var state = {};

    switch (e.target.id) {
      case 'boardName':
        state = { name: e.target.value };
        break;
      case 'boardPeriod':
        state = { period: e.target.value };
        break;
    }

    console.log(state);

    this.setState(state);
  },

  createBoard() {
    let body = {
      name: this.state.name,
      period: this.state.period
    };

    console.log(body);

    BoardActionsCreator.createBoard(this.props.params.id, body);

    this.closeModal();
  },

  render() {
    return (
      <section id="team" className="team-page bg-secondary">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>{this.state.team.name} boards</h2>
              <hr className="small" />
              </div>
              <div className="col-lg-12 text-right ">
                <button type="button" data-toggle="modal" onClick={this.openModal} data-target="#AddBoard" className="btn btn-dark ">Add Board <span
                  className="fa-stack fa-1x">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-plus fa-stack-1x text-dark"></i>
                </span></button>
              </div>
              <BoardItemContainer data={this.state.boards} teamId={this.props.params.id} />
            </div>
          </div>
          <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyle}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" onClick={this.closeModal} aria-label="Close"><span
                    aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title" id="myModalLabel">Add Board</h4>
                </div>
                <div className="modal-body">

                  <div className="form-group">
                    <label htmlFor="boardName">Board Name</label>
                    <input type="text" className="form-control" id="boardName" onChange={this.handleChange} placeholder="Board Name"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="boardPeriod">Board Period</label>
                      <input type="datetime" className="form-control" onChange={this.handleChange} id="boardPeriod" />
                      </div>


                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-default" onClick={this.closeModal} data-dismiss="modal">Cancel</button>
                      <button type="button" className="btn btn-primary" onClick={this.createBoard}>Create Board</button>
                    </div>
                  </div>
                </div>
              </Modal>
            </section>
      );
  }
});

Boards.displayName = 'BoardsComponent';

// Uncomment properties you need
// BoardComponent.propTypes = {};
// BoardComponent.defaultProps = {};

export default Boards;
