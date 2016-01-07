'use strict';
var dispatcher = require('../dispatchers/AppDispatcher');
var teamConstants = require('../constants/team-constants');
var appConstants = require('../constants/app-constants');
var teamSource = require('../sources/TeamSource');
var teamAction = {
  getTeams: function(){
    teamSource.getTeams()
    .then(function(response){
      if(response.status === 200){
        return response.json();
      }
    }).then(function(teams){
      dispatcher.dispatch({
        actionType: teamConstants.GET_TEAMS,
        teams: teams
      });
    }).catch(function(err){
      dispatcher.dispatch({
        actionType: appConstants.ACTIONS.ERRORS.SERVER_SIDE,
        err: err
      });
    });
  }
};

module.exports = teamAction;
