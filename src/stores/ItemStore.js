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

let itemStore = new ItemStore();

itemStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
    case 'ITEM_CREATED':
      _items.push(action.item);
      itemStore.emitChange();
      break;
    case 'ITEM_FETCHED':
      _items = action.items;
      itemStore.emitChange();
      break;
    case 'ITEM_INCREMENTED':
      // TODO: need better way of doing this, i.e use a number
      for (var i of _items) {
        if (i._id === action.item._id) {
          i.votes = action.item.votes;
          break;
        }
      }
      itemStore.emitChange();
      break;
    default:
      break;
  }
});

export default itemStore;
