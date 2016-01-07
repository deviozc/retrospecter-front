'use strict';

var appConstants = require('../constants/app-constants');

var API_URL = appConstants.API_URL;

var HEADERS = {
    Accept: 'application/json'
};

var itemSource = {
  getItems: function(teamID, boardID){
    return fetch(API_URL + '/teams/' + teamID + '/boards/' + boardID + '/items');
  },
  createItem: function(teamID, boardID, item){
    return fetch(API_URL + '/teams/' + teamID + '/boards/' + boardID, {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: item
    });
  },
  createTeam: function(team){
    return fetch(API_URL + '/teams/' + teamID + '/boards/' + boardID + '/items', {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: team
    });
  }
};

module.exports = itemSource;
