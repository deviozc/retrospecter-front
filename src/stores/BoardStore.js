'use strict';

import { EventEmitter } from 'events';
import AppDispatcher from '../dispatchers/AppDispatcher';

let _boards = null;

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

BoardStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
    case 'FETCH_BOARDS':
      _boards = action.boards;
      BoardStore.emitChange();
      break;
    default:
      break;
    }
});


export default new BoardStore();
