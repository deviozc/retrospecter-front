import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory} from 'react-router';
import App from './components/Main';
import Team from './components/TeamComponent';
import Board from './components/BoardComponent';
import Index from './components/Index';
import RetroRoute from './route';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<RetroRoute />, document.getElementById('route'));
