'use strict';

var EventEmitter = require('eventemitter3');
var eventEmitter = new EventEmitter();
var teamConstants = require('../constants/team-constants');

import AppDispatcher from '../dispatchers/AppDispatcher';

let _teams = [];
let teamStore = {
  on: function(event, callback) {
    eventEmitter.on(event, callback);
  },
  emit: function(event) {
    eventEmitter.emit(event);
  },
  removeChangeListener: function(event, callback) {
      eventEmitter.removeListener(event, callback);
  },
  getTeams: function(){
    return _teams;
  },
  getTeam: function(id){
    var result;
    _teams.some(function(team){
      if(team._id === id){
        result = team;
        return true;
      }
      return false;
    });
    return result;
  }
};
AppDispatcher.register(
  function(action) {
    switch (action.actionType) {
      case teamConstants.GET_TEAMS:
        _teams = action.teams;
        teamStore.emit(teamConstants.GET_TEAMS);
        break;
    }
  }
);

module.exports = teamStore;
