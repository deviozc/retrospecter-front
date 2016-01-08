'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher';
import {EventEmitter} from 'events';
import teamConstants from '../constants/team-constants';

let _teams = [];

class TeamStore extends EventEmitter {
  addChangeListener(fn) {
    this.on('CHANGE', fn);
  }

  removeChangeListener(fn) {
    this.removeListener('CHANGE', fn);
  }

  emitChange() {
    this.emit('CHANGE');
  }

  getTeams() {
    return _teams;
  }

  getTeam(id) {
    let team = null;

    _teams.some((item) => {
      if (item._id === id) {
        team = item;
        return true;
      }
    });

    return team;
  }
};

let teamStore = new TeamStore();

teamStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
    case teamConstants.GET_TEAMS:
      _teams = action.teams;
      teamStore.emitChange();
      break;
    case teamConstants.CREATE_TEAM:
      _teams.push(action.team);
      teamStore.emitChange();
      break;
    default:
  }
});

export default teamStore;
