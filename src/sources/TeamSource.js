'use strict';

var appConstants = require('../constants/app-constants');

var API_URL = appConstants.API_URL;

var HEADERS = {
    Accept: 'application/json'
};

var teamSource = {
  getTeams: function(cb){
    return fetch('http://localhost:8080/teams');
    // return fetch(API_URL + '/teams');
  }
};

module.exports = teamSource;
