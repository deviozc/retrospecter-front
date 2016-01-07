'use strict';

var appConstants = require('../constants/app-constants');

var API_URL = appConstants.API_URL;

var HEADERS = {
    Accept: 'application/json'
};

var boardSource = {
  getBoards: function(teamID){
    return fetch(API_URL + '/teams/' + teamID + '/boards');
  },
  createBoards: function(teamID, board){
    return fetch(API_URL + '/teams/' + teamID + '/boards', {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: board
    });
  },
  getBoard: function(teamID, boardID){
    // return fetch('http://localhost:8080/teams');
    return fetch(API_URL + '/teams/' + teamID + '/boards/' + boardID);
  }
};

module.exports = boardSource;
