'use strict';

var appConstants = require('../constants/app-constants');

var API_URL = appConstants.API_URL;

var HEADERS = {
    Accept: 'application/json'
};

var actionSource = {
  getTeamActions: function(teamID) {
    return fetch(API_URL + '/teams/' + teamID + '/actions');
  },

  getActions: function(teamID, boardID){
    return fetch(API_URL + '/teams/'+ teamID +'/boards/'+ boardID +'/actions');
  },

  createAction: function(teamID, boardID, action){
    return fetch(API_URL + '/teams/'+ teamID +'/boards/'+ boardID +'/actions', {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(action)
    });
  }
};

module.exports = actionSource;
