'use strict';

import { EventEmitter } from 'events';
import AppDispatcher from '../dispatchers/AppDispatcher';

let _boards = [];

class BoardStore extends EventEmitter {
  addChangeListener(fn) {
    this.on('CHANGE', fn);
  }

  emitChange() {
    this.emit('CHANGE');
  }

  removeChangeListener(fn) {
    this.removeListener('CHANGE', fn);
  }

  getAll() {
    return _boards;
  }

  getOne(boardId) {
    var result = {};

    for (let board of _boards) {
      if (board._id === boardId) {
        result = board;
        break;
      }
    }

    return result;
  }
}

let boardStore = new BoardStore();

boardStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
    case 'FETCH_BOARDS':
      _boards = action.boards;
      boardStore.emitChange();
      break;
    case 'CREATE_BOARD':
      _boards.push(action.board);
      boardStore.emitChange();
      break;
    default:
    }
});


export default boardStore;
