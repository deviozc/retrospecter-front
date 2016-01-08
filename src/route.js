'use strict';

import React, { Component } from 'react';
import { Router, IndexRoute, Route, browserHistory} from 'react-router';

import App from './components/Main';
import Teams from './components/Teams';
import Boards from './components/Boards';
import Board from './components/Board'
import Index from './components/Index';

class RetroRoute extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Index} />
          <Route path='about' component={Teams} />
          <Route path='teams' component={Teams}>
            <Route path=':id' component={Teams} />
          </Route>
          <Route path='boards' component={Boards}>
          </Route>
          <Route path='/boards/:id' component={Board} />
        </Route>
      </Router>
    );
  }
}

RetroRoute.displayName = 'RetroRoute';

// Uncomment properties you need
// TeamComponent.propTypes = {};
// TeamComponent.defaultProps = {};

export default RetroRoute;
