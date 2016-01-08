'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher';
import appConstants from '../constants/app-constants';
import actionConstants from '../constants/action-constants';
import ActionSource from '../sources/ActionSource';

export default {
  getTeamActions: (teamID) => {
    return ActionSource.getTeamActions(teamID)
      .then((response) => {
        if(response.status === 200){
          return response.json();
        }

        return Promise.reject('Server side error');
      })
      .then((actions) => {
        AppDispatcher.dispatch({
          type: actionConstants.GET_ACTIONS,
          actions: actions
        });
      })
      .catch((err) => {
        AppDispatcher.dispatch({
          type: appConstants.ACTIONS.ERRORS.SERVER_SIDE,
          err: err
        });
      });
  },

  getActions: (teamID, boardID) => {
    return ActionSource.getActions(teamID, boardID)
      .then((response) => {
        if(response.status === 200){
          return response.json();
        }else{
          Promise.reject('Server side error');
        }
      })
      .then((actions) => {
        AppDispatcher.dispatch({
          type: actionConstants.GET_ACTIONS,
          actions: actions
        });
      })
      .catch((err) => {
        AppDispatcher.dispatch({
          type: appConstants.ACTIONS.ERRORS.SERVER_SIDE,
          err: err
        });
      });
  },
  createAction: (teamId, boardId, action) => {
    return ActionSource.createAction(teamId, boardId, action)
      .then((response) => {
        if(response.status === 200){
          return response.json();
        }else{
          Promise.reject('Server side error');
        }
      })
      .then((action) => {
        AppDispatcher.dispatch({
          type: actionConstants.CREATE_ACTION,
          action: action
        });
      })
      .catch((err) => {
        AppDispatcher.dispatch({
          type: appConstants.ACTIONS.ERRORS.SERVER_SIDE,
          err: err
        });
      });;
  }
};
