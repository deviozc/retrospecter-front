'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher';
import appConstants from '../constants/app-constants';
import teamConstants from '../constants/team-constants';
import TeamSource from '../sources/TeamSource';

export default {
  getTeams: () => {
    return TeamSource.getTeams()
      .then((response) => {
        if(response.status === 200){
          return response.json();
        }
      })
      .then((teams) => {
        AppDispatcher.dispatch({
          actionType: teamConstants.GET_TEAMS,
          teams: teams
        });
      })
      .catch((err) => {
        AppDispatcher.dispatch({
          actionType: appConstants.ACTIONS.ERRORS.SERVER_SIDE,
          err: err
        });
      });
  }
};
