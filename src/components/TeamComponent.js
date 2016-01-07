'use strict';

import React from 'react';

require('styles/Team.css');
var teamStore = require('../stores/TeamStore');
var teamConstants = require('../constants/team-constants');
var teamAction = require('../actions/TeamAction');

class TeamComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {teams: []};
  }
  componentDidMount() {
    teamStore.on(teamConstants.GET_TEAMS, function(){
      this.setState({teams: JSON.stringify(teamStore.getTeams())});
    }.bind(this));
    teamAction.getTeams();
  }
  componentWillUnmount() {
    ItemStore.removeChangeListener(teamConstants.GET_TEAMS);
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
