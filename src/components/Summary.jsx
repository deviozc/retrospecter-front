'use strict';

import React from 'react';

import ActionItemAction from '../actions/ActionItemAction';
import TeamAction from '../actions/TeamAction';
import TeamStore from '../stores/TeamStore';
import ActionStore from '../stores/ActionItemStore';
require('styles/Summary.css');
let getStateFromStore = (teamId) => {
  return {
    team: TeamStore.getTeam(teamId),
    actions: ActionStore.getActions()
  };
};

let Summary = React.createClass({
  getInitialState() {
    return getStateFromStore(this.props.params.teamId);
  },

  componentDidMount() {
    TeamStore.addChangeListener(this._onChange);
    ActionStore.addChangeListener(this._onChange);

    ActionItemAction.getTeamActions(this.props.params.teamId);
  },

  componentWillUnmount() {
    TeamStore.removeChangeListener(this._onChange);
    ActionStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(getStateFromStore(this.props.params.teamId));
  },

  render() {
    return (
    <div className="col-lg-10 col-lg-offset-1 text-center">
                    <h2>Summary Page: {this.state.team.name} </h2>
                    <hr className="small"/>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-left status-list">
                        <div className="status-item">
                        <ul>
                        <li>Name</li>
                        <li>Status</li>
                        </ul>
                        <ul>
                          {this.state.actions.map((action) => {
                            return <li key={action._id}>{action.actionName} {action.status}</li>
                          })}
                        </ul>
                        </div>
              </div>
        </div>
      </div>
    );
  }
});

export default Summary;
