'use strict';

var request = require('request');
var appConstants = require('constants/app-constants');

var API_URL = appConstants.API_URL;

var HEADERS = {
    Accept: 'application/json'
};

var teamSource = {
  getTeams: function(){
    request.get(API_URL + /teams, function(err, response, body){
      console.log(body);
    });
  }
};

module.exports = teamSource;
