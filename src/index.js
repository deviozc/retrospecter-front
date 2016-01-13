'use strict';

import 'core-js/fn/object/assign';
import 'bootstrap-webpack!../bootstrap.config.js';
import 'font-awesome-webpack';

import React from 'react';
import ReactDOM from 'react-dom';
import RetroRoute from './route';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<RetroRoute />, document.getElementById('route'));
