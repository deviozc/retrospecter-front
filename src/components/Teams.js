'use strict';

import React from 'react';

require('styles/Team.css');

import TeamStore from '../stores/TeamStore';
import teamConstants from '../constants/team-constants';
import teamAction from '../actions/TeamAction';
import Team from './Team';

class TeamComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {teams: []};
  }
  componentDidMount() {
    TeamStore.on(teamConstants.GET_TEAMS, function(){
      this.setState({teams: TeamStore.getTeams()});
    }.bind(this));
    teamAction.getTeams();
  }
  componentWillUnmount() {
    TeamStore.removeChangeListener(teamConstants.GET_TEAMS);
  }
  render() {
    return (
      <section id="create_team" classNameName="create-team">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1>Team Directories</h1>
                    <hr className="small"></hr>
                </div>
                <div className="col-lg-12 text-right match-row-padding-right">
                    <button type="button" data-toggle="modal" data-target="#AddTeam" className="btn btn-dark ">Create Team <span
                            className="fa-stack fa-1x">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-plus fa-stack-1x text-dark"></i>
                                </span></button>
                </div>
            </div>
            <div className="row team-item-list">
                {this.state.teams.map(function(team){
                  return <Team key={team._id} id={team._id} data={team} />
                })}
            </div>
        </div>
    </section>
    );
  }
}

TeamComponent.displayName = 'TeamComponent';

// Uncomment properties you need
// TeamComponent.propTypes = {};
// TeamComponent.defaultProps = {};

export default TeamComponent;
