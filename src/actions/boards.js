'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher';

let mockBoards = [
  {
    type: 'good',
    name: 'something'
  }
];

export default {
  getBoards: function(teamId) {
    AppDispatcher.dispatch({
      type: 'FETCH_BOARDS',
      boards: mockBoards,
      teamId: teamId
    });
  }
}
