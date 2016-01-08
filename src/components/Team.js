'use strict';

import React from 'react';

require('styles/Team.css');

import TeamStore from '../stores/TeamStore';
import teamConstants from '../constants/team-constants';
import teamAction from '../actions/TeamAction';
import { Link } from 'react-router'

class TeamComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var team = this.props.data;
    return (
      <div className="col-sm-12  team-item">
          <div className="panel panel-default">
              <div className="panel-header clearfix"><h3 className="pull-left"><Link to={`/teams/${team._id}/boards`}>{this.props.data.name}</Link></h3>
              </div>

              <div className="panel-footer text-right">
                  <a href="#" className="btn btn-dark">Delete</a>
              </div>
          </div>
      </div>
    );
  }
}

TeamComponent.displayName = 'Team';

// Uncomment properties you need
// TeamComponent.propTypes = {};
// TeamComponent.defaultProps = {};

export default TeamComponent;
