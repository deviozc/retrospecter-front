'use strict';

var EventEmitter = require('eventemitter3');
var eventEmitter = new EventEmitter();
var teamConstants = require('../constants/team-constants');
var dispatcher = require('../dispatchers/AppDispatcher');
var teams;
var teamStore = {
  on: function(event, callback) {
    eventEmitter.on(event, callback);
  },
  emit: function(event) {
    eventEmitter.emit(event);
  },
  removeListener: function(event, callback) {
      eventEmitter.removeListener(event, callback);
  },
  getTeams: function(){
    return teams;
  }
};
dispatcher.register(
  function(action) {
    switch (action.actionType) {
      case teamConstants.GET_TEAMS:
        console.log(action);
        teams = action.teams;
        teamStore.emit(teamConstants.GET_TEAMS);
        break;
    }
  }
);

module.exports = teamStore;
