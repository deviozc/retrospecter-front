'use strict';

import util from 'util';
import AppDispatcher from '../dispatchers/AppDispatcher';

let mockBoards = [
  {
    teamId: 'abc',
    id: 'some_id',
    name: 'something'
  }
];

let fetchBoards = (teamId) => {
  let options = {
    headers: {
      'content-type': 'application/json'
    }
  };

  return fetch(util.format('http://localhost:8080/teams/%s/boards', teamId), options)
    .then((response) => {
      console.log(response);
      return Promise.resolve(mockBoards);
    })
    .catch((err) => {
      console.log(err);
      return Promise.resolve(mockBoards);
    });
};

export default {
  getBoards: function(teamId) {
    return fetchBoards(teamId)
      .then(function(boards) {
        AppDispatcher.dispatch({
          type: 'FETCH_BOARDS',
          boards: boards,
          teamId: teamId
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
