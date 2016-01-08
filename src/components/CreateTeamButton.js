'use strict';

import React from 'react';

require('styles/Team.css');

import teamConstants from '../constants/team-constants';
import teamAction from '../actions/TeamAction';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';

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
          onRequestClose={this.closeModal.bind(this)} >

          <h2>Hello</h2>
          <button onClick={this.closeModal.bind(this)}>close</button>
          <div>I am a modal</div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input className="form-control" name="name" ref="name" type="text" />
            <button type="submit">Submit</button>

          </form>
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
