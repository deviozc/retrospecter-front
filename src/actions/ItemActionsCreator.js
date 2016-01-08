'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher';

import ItemSource from '../sources/ItemSource';

export default {
  incrementVote: (teamId, boardId, id) => {
    return ItemSource.incrementVote(teamId, boardId, id)
      .then((body) => {
        AppDispatcher.dispatch({
          type: 'ITEM_INCREMENTED',
          item: body
        })
      })
      .catch((err) => {
        console.log(err);
      });
  },

  createItem: (teamId, boardId, body) => {
    return ItemSource.createItem(team, boardId, body)
      .then((body) => {
        AppDispatcher.dispatch({
          type: 'ITEM_CREATED',
          item: body
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
