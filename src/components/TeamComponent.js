'use strict';

import React from 'react';

require('styles/Team.css');

import TeamStore from '../stores/TeamStore';
import teamConstants from '../constants/team-constants';
import teamAction from '../actions/TeamAction';

class TeamComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {teams: []};
  }
  componentDidMount() {
    TeamStore.on(teamConstants.GET_TEAMS, function(){
      this.setState({teams: JSON.stringify(TeamStore.getTeams())});
    }.bind(this));
    teamAction.getTeams();
  }
  componentWillUnmount() {
    TeamStore.removeChangeListener(teamConstants.GET_TEAMS);
  }
  render() {
    var teams = this.state.teams;

    return (
      <div className="team-component">
        {teams}
        Team page!
      </div>
    );
  }
}

TeamComponent.displayName = 'TeamComponent';

// Uncomment properties you need
// TeamComponent.propTypes = {};
// TeamComponent.defaultProps = {};

export default TeamComponent;
