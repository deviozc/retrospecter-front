'use strict';

require('styles/Board.css');

import React from 'react';
import Modal from 'react-modal';

import ItemStore from '../stores/ItemStore';
import ItemActionsCreator from '../actions/ItemActionsCreator';

let getStateFromStore = () => {
  let state = {};

  let items = ItemStore.getAll();

  if (!(items && items.length)) {
    state.boards = {};
  } else {
    for (let item of items) {
      if (state[item.category]) {
        state[item.category].push(item);
      } else {
        state[item.category] = [item]
      }
    }
  }

  return state;
};

const customStyle = {
  content: {
    border:'0px'
  }
};

let Item = React.createClass({
  vote(event) {
    event.preventDefault();

    ItemActionsCreator.incrementVote(this.props.data.teamId, this.props.data.boardId, this.props.data._id);
  },

  render() {
    return (
      <li>
        <div className="sticky-body">{this.props.data.itemDescription}</div>
        <div className="text-right sticky-footer">
          <button type="button" className="btn btn-link pull-left" data-toggle="modal" data-target="#AddSticky" ><i className="fa fa-pencil"></i></button>
          <button type="button" onClick={this.vote} className="btn btn-link pull-right"><i className="fa fa-thumbs-up"></i></button>
        </div>
      </li>
    );
  }
});

let Category = React.createClass({
  render() {
    if (this.props.data && this.props.data.length) {
      return (
        <div className="col-md-6 sticky-bg">
          <ul className="sticky-item">
            {this.props.data.map((item) => {
              return <Item key={item._id} data={item} />
            })}
          </ul>
        </div>
      )
    } else {
      return (
        <div className="col-md-6 sticky-bg">
        </div>
      );
    }
  }
});

let Board = React.createClass({
  getInitialState() {
    return getStateFromStore();
  },

  componentDidMount() {
    ItemStore.addChangeListener(this._onChange);
    ItemActionsCreator.getItems(this.props.params.teamId, this.props.params.id);
  },

  componentWillUnmount() {
    ItemStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(getStateFromStore());
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

  createSticky(e) {
    e.preventDefault();

    let body = {
      itemDescription: this.state.description,
      category: this.state.category
    };

    ItemActionsCreator.createItem(this.props.params.teamId, this.props.params.id, body);

    delete this.state.description;
    delete this.state.category;

    this.closeModal();
  },

  handleChange(e) {
    this.setState({
      description: e.target.value
    });
  },

  handleSelectChange(e) {
    this.setState({
      category: e.target.value
    });
  },

  render() {
    return (
      <section id="boardPage" className="boards">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>Board Name</h2>
              <hr className="small" />
            </div>
            <div className="col-lg-12 text-right ">
              <button type="button" data-toggle="modal" onClick={this.openModal} className="btn btn-dark ">Add
                Sticky <span className="fa-stack fa-1x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-plus fa-stack-1x text-dark"></i>
              </span></button>
            </div>
          </div>
          <div className="row sticky-row-one">
            <Category data={this.state.GOOD} />
            <Category data={this.state.BAD} />
          </div>

          <div className="row sticky-row-two">
            <Category data={this.state.IDEA} />
            <Category data={this.state.ACHIEVEMENT} />
          </div>
          <br />

          <p className="text-center"><a href="#summary" className="btn btn-dark text-center">Go To Summary</a></p>
        </div>

        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyle}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" onClick={this.closeModal} data-dismiss="modal" aria-label="Close"><span
                  aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Add Sticky</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <select defaultValue="GOOD" onChange={this.handleSelectChange}>
                    <option value="GOOD">Good</option>
                    <option value="BAD">Bad</option>
                    <option value="ACHIEVEMENT">Achievement</option>
                    <option value="IDEA">Idea</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="boardPeriod">Sticky Detail</label>
                  <textarea className="form-control" onChange={this.handleChange} id="itemDescription" rows="5"></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" onClick={this.closeModal} data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary" onClick={this.createSticky}>Add</button>
              </div>
            </div>
          </div>
        </Modal>
      </section>
    )
  }
});

export default Board
