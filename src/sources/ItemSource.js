'use strict';

import util from 'util';
import request from 'reqwest';
import appConstants from '../constants/app-constants';

var API_URL = appConstants.API_URL;

var HEADERS = {
    Accept: 'application/json'
};

export default {
  getItems(teamId, boardId) {
    return new Promise((resolve, reject) => {
      return request({
        url: util.format('%s/teams/%s/boards/%s/items', API_URL, teamId, boardId),
        method: 'GET',
        crossOrigin: true,
        type: 'json',
        success: (body) => {
          resolve(body);
        },
        error: (err) => {
          reject(err);
        }
      });
    });
  },

  createItem(teamId, boardId, item) {
    return new Promise((resolve, reject) => {
      return request({
        url: util.format('%s/teams/%s/boards/%s/items', API_URL, teamId, boardId),
        method: 'POST',
        crossOrigin: true,
        type: 'json',
        data: item,
        success: (body) => {
          resolve(body);
        },
        error: (err) => {
          reject(err);
        }
      });
    });
  },

  incrementVote(teamId, boardId, itemId) {
    return new Promise((resolve, reject) => {
      return request({
        url: util.format('%s/teams/%s/boards/%s/items/%s/votes', API_URL, teamId, boardId, itemId),
        method: 'POST',
        crossOrigin: true,
        type: 'json',
        success: (body) => {
          resolve(body);
        },
        error: (err) => {
          reject(err);
        }
      });
    });
  }
};
