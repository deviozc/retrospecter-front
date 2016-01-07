'use strict';
import { EventEmitter } from 'events'
import dispatcher from '../dispatchers/AppDispatcher';

let boards = null;

let boardStore = {
  on: (event, fn) => {
    EventEmitter
  }
};

dispatcher.register((action) => {
  switch (action.actionType) {
    case 'FETCH_BOARDS':
      boards = action.boards;
      this.emit('FETCH_BOARDS');
      break;
    default:

  }
});

export default boardStore;
