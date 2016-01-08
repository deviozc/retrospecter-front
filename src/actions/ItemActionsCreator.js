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

  getItems: (teamId, boardId) => {
    return ItemSource.getItems(teamId, boardId)
      .then((body) => {
        AppDispatcher.dispatch({
          type: 'ITEM_FETCHED',
          items: body
        });
      });
  },

  createItem: (teamId, boardId, body) => {
    return ItemSource.createItem(teamId, boardId, body)
      .then((body) => {
        AppDispatcher.dispatch({
          type: 'ITEM_CREATED',
          item: body
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
