'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher';

let mockBoards = [
  {
    teamId: 'abc',
    id: 'some_id',
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
