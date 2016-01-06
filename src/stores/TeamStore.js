'use strict';

var EventEmitter = require('eventemitter3');
var eventEmitter = new EventEmitter();
var teamConstants = require('dispatchers/team-constants');
var dispatcher = require('dispatchers/AppDispatcher');

var teamStore = {
  on: function(event, callback) {
    eventEmitter.on(event, callback);
  },
  emit: function(event) {
    eventEmitter.emit(event);
  }
};
dispatcher.register(
  function(action) {
    switch (action.actionType) {
      case teamConstants.GET_TEAMS:
        teamStore.emit(teamConstants.GET_TEAMS);
        break;
    }
  }
);

module.exports = teamStore;
