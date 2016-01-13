'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import ActionItemStore from '../stores/ActionItemStore';
import actionConstants from '../constants/action-constants';
import ActionItemAction from '../actions/ActionItemAction';
import Action from './ActionItem';
import { Link } from 'react-router'
import Modal from 'react-modal';

let ActionItemsComponent = React.createClass({
  getInitialState() {
    return {
      actions: ActionItemStore.getActions(this.props.params.teamId, this.props.params.boardId)
    };
  },

  componentDidMount() {
    ActionItemStore.addChangeListener(this._onChange);
    ActionItemAction.getActions(this.props.params.teamId, this.props.params.boardId);
  },

  _onChange() {
    this.setState({ actions: ActionItemStore.getActions() });
  },

  componentWillUnmount() {
    ActionItemStore.removeChangeListener(this._onChange);
  },

  render() {
    return (
      <section id="create_actions" classNameName="create-team">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1>Action items</h1>
                    <hr className="small"></hr>
                </div>
                <div className="col-lg-12 text-right match-row-padding-right">
                    <CreateActionButtonComponent {...this.props} />
                </div>
            </div>
            <div className="row team-item-list">
                {this.state.actions.map(function(action){
                  return <Action key={action._id} id={action._id} data={action} />
                })}
            </div>
        </div>
    </section>
    );
  }
});
const customStyles = {
  content : {
    width                 : '600px',
    margin                : '0 auto',
    padding               : '0',
    border                : '0'
  }
};
let CreateActionButtonComponent = React.createClass({
  getInitialState: function() {
    return {modalIsOpen: false};
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    ActionItemAction.createAction(this.props.params.teamId, this.props.params.boardId, {actionName: ReactDOM.findDOMNode(this.refs.name).value, status: ReactDOM.findDOMNode(this.refs.status).value});
    this.closeModal();
  },
  render: function() {
    return (
      <div>
        <button type="button" onClick={this.openModal} className="btn btn-dark ">Create Action <span
                className="fa-stack fa-1x">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-plus fa-stack-1x text-dark"></i>
                    </span></button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal} style={customStyles}>
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}><span
                                  aria-hidden="true">&times;</span></button>
                          <h4 className="modal-title" id="myModalLabel">Add Action</h4>
                      </div>
                      <form onSubmit={this.handleSubmit}>
                          <div className="modal-body">
                              <div className="form-group">
                                      <select defaultValue="TODO" ref="status">
                                        <option value="TODO">To-do</option>
                                        <option value="IN PROGRESS">In Progress</option>
                                        <option value="DONE">Done</option>
                                        <option value="WAITING">Waiting</option>
                                      </select>
                                      <label htmlFor="boardName">Action Item</label>
                                      <textarea className="form-control" name="name" ref="name" type="text" placeholder="Action Item"></textarea>
                                  </div>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closeModal}>Cancel</button>
                              <button type="button" className="btn btn-primary" type="submit">Create Action</button>
                          </div>
                      </form>

                  </div>
              </div>
        </Modal>
      </div>
    );
  }
});

ActionItemsComponent.displayName = 'Actions';

// Uncomment properties you need
// TeamComponent.propTypes = {};
// TeamComponent.defaultProps = {};

export default ActionItemsComponent;
