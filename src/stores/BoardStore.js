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
}

let boardStore = new BoardStore();

boardStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
    case 'FETCH_BOARDS':
      _boards = action.boards;
      boardStore.emitChange();
      break;
    default:
    }
});


export default boardStore;
