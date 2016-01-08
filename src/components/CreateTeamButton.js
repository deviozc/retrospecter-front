'use strict';

import React from 'react';

require('styles/Team.css');

import teamConstants from '../constants/team-constants';
import teamAction from '../actions/TeamAction';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
const customStyles = {
  content : {
    width                 : '600px',
    margin                : '0 auto',
    padding               : '0',
    border                : '0'
  }
};
class CreateTeamButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false};
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleSubmit(e) {
    e.preventDefault();
    teamAction.createTeam({name: ReactDOM.findDOMNode(this.refs.name).value});
    this.closeModal();
  }
  render() {
    return (
      <div>
        <button type="button" onClick={this.openModal.bind(this)} className="btn btn-dark ">Create Team <span
                className="fa-stack fa-1x">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-plus fa-stack-1x text-dark"></i>
                    </span></button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)} style={customStyles}>
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal.bind(this)}><span
                                  aria-hidden="true">&times;</span></button>
                          <h4 className="modal-title" id="myModalLabel">Add Team</h4>
                      </div>
                      <form onSubmit={this.handleSubmit.bind(this)}>
                          <div className="modal-body">
                              <div className="form-group">
                                      <label for="boardName">Team Name</label>
                                      <input className="form-control" name="name" ref="name" type="text" placeholder="Board Name" />
                                  </div>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closeModal.bind(this)}>Cancel</button>
                              <button type="button" className="btn btn-primary" type="submit">Create Team</button>
                          </div>
                      </form>

                  </div>
              </div>
        </Modal>
      </div>
    );
  }
}

CreateTeamButtonComponent.displayName = 'CreateTeamButtonComponent';

// Uncomment properties you need
// TeamComponent.propTypes = {};
// TeamComponent.defaultProps = {};

export default CreateTeamButtonComponent;
