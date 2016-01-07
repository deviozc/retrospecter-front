'use strict';

var appConstants = require('../constants/app-constants');

var API_URL = appConstants.API_URL;

var HEADERS = {
    Accept: 'application/json'
};

var teamSource = {
  getTeams: function(){
    // return fetch('http://localhost:8080/teams');
    return fetch(API_URL + '/teams');
  },
  createTeam: function(team){
    return fetch(API_URL + '/teams', {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: team
    });
  }
};

module.exports = teamSource;
