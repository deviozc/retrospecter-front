'use strict';
var dispatcher = require('dispatchers/AppDispatcher');
var teamConstants = require('dispatchers/team-constants');

var teamAction = {
  getTeams: function(){
    dispatcher.dispatch({
      actionType: teamConstants.GET_TEAMS
    });
  }
};

module.exports = teamAction;
