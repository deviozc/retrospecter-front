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
    case 'ITEM_CREATED':
      _items.push(action.item);
      ItemStore.emitChange();
      break;
    case 'ITEM_FETCHED':
      _items = action.items;
      ItemStore.emitChange();
      break;
    case 'ITEM_INCREMENTED':
      // TODO: need better way of doing this, i.e use a number
      for (let i of _items) {
        if (i.id === action.item.id) {
          i = action.items;
          break;
        }
      }
    default:
      break;
  }
});

export default new ItemStore();
