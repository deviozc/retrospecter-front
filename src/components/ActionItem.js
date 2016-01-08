'use strict';

import React from 'react';


import ActionItemStore from '../stores/ActionItemStore';
import actionConstants from '../constants/action-constants';
import ActionItemAction from '../actions/ActionItemAction';
import { Link } from 'react-router'

class ActionItemComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-sm-12  team-item">
          <div className="panel panel-default">
              <div className="panel-header clearfix">
                <h3 className="pull-left">{this.props.data.actionName}</h3>
                <span className="label label-primary"> {this.props.data.status}</span>
              </div>

              <div className="panel-footer text-right">
                  <a href="#" className="btn btn-dark">Delete</a>
              </div>
          </div>
      </div>
    );
  }
}

ActionItemComponent.displayName = 'Team';

// Uncomment properties you need
// TeamComponent.propTypes = {};
// TeamComponent.defaultProps = {};

export default ActionItemComponent;
