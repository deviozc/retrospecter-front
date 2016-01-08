'use strict';

import React from 'react';

import TeamStore from '../stores/TeamStore';

let getStateFromStore = (teamId) => {
  return {
    team: TeamStore.getTeam(teamId)
  };
};

let Summary = React.createClass({
  getInitialState() {
    return getStateFromStore(this.props.params.teamId);
  },

  componentDidMount() {
    TeamStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    TeamStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(getStateFromStore(this.props.params.teamId));
  },

  render() {
    return (
      <div>
        Summary Page: {this.state.team.name}
      </div>
    );
  }
});

export default Summary;
