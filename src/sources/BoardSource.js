'use strict';

import util from 'util';
import request from 'reqwest';

import appConstants from '../constants/app-constants';

export default {
  getBoard() {
    return Promise.reject(new Error('needs to be implemented'));
  },

  createBoard(teamId, body) {
    console.log(teamId);
    console.log(body);
    return new Promise((resolve, reject) => {
      return request({
        url: util.format('%s/teams/%s/boards', appConstants.API_URL, teamId),
        method: 'POST',
        crossOrigin: true,
        type: 'json',
        contentType: 'application/json',
        data: JSON.stringify(body),
        success: (body) => {
          resolve(body);
        },
        error: (err) => {
          reject(err);
        }
      });
    });
  },

  getBoards(teamId) {
    return new Promise((resolve, reject) => {
      return request({
        url: util.format('%s/teams/%s/boards', appConstants.API_URL, teamId),
        crossOrigin: true,
        type: 'json',
        method: 'GET',
        success: (body) => {
          resolve(body);
        },
        error: (err) => {
          reject(err);
        }
      })
    });
  }
}
