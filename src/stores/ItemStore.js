'use strict';

import { EventEmitter } from 'events';
import AppDispatcher from '../dispatchers/AppDispatcher';

let _items = [];

class ItemStore extends EventEmitter {
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
    return _items;
  }
}

ItemStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
    case 'ITEM_RECEIVED':
      _items.push(action.item);
      ItemStore.emitChange();
      break;
    case 'ITEM_FETCHED':
      _items = action.items;
      ItemStore.emitChange();
      break;
    default:
      break;
  }
});

export default new ItemStore();
