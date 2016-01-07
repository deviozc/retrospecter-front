'use strict';

import BoardSource from '../sources/BoardSource';
import AppDispatcher from '../dispatchers/AppDispatcher';

export default {
  getBoards: (teamId) => {
    return BoardSource.getBoards(teamId)
      .then((boards) => {
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
