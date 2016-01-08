'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher';
import {EventEmitter} from 'events';
import actionConstants from '../constants/action-constants';

let _actions = [];

class ActionStore extends EventEmitter {
  addChangeListener(fn) {
    this.on('CHANGE', fn);
  }

  removeChangeListener(fn) {
    this.removeListener('CHANGE', fn);
  }

  emitChange() {
    this.emit('CHANGE');
  }

  getActions() {
    return _actions;
  }

}

let actionStore = new ActionStore();

actionStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
    case actionConstants.GET_ACTIONS:
      _actions = action.actions;
      actionStore.emitChange();
      break;
    case actionConstants.CREATE_ACTION:
      _actions.push(action.team);
      actionStore.emitChange();
      break;
    default:
  }
});

export default actionStore;
