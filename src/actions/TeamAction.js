'use strict';

import AppDispatcher from '../dispatchers/AppDispatcher';
import appConstants from '../constants/appConstants';
import TeamSource from '../sources/TeamSource';

export default {
  getTeams() {
    return TeamSource.getTeams()
      .then((response) => {
        console.log(response);
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
          actionType: teamConstants.GET_TEAMS,
          teams: err
        });
      });
  }
};
