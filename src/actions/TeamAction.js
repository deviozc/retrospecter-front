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
        }else{
          Promise.reject('Server side error');
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
  },
  createTeam: (team) => {
    return TeamSource.createTeam(team)
      .then((response) => {
        if(response.status === 200){
          return response.json();
        }else{
          Promise.reject('Server side error');
        }
      })
      .then((team) => {
        AppDispatcher.dispatch({
          actionType: teamConstants.CREATE_TEAM,
          team: team
        });
      })
      .catch((err) => {
        AppDispatcher.dispatch({
          actionType: appConstants.ACTIONS.ERRORS.SERVER_SIDE,
          err: err
        });
      });;
  }
};
