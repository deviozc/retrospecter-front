'use strict';

import React, { Component } from 'react';
import { Router, IndexRoute, Route, browserHistory} from 'react-router';

import App from './components/Main';
import Teams from './components/Teams';
import Boards from './components/Boards';
import Board from './components/Board'
import Actions from './components/ActionItems';
import Index from './components/Index';
import Summary from './components/Summary';

class RetroRoute extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Index} />
          <Route path='teams' component={Teams} />
          <Route path='teams/:id/boards' component={Boards} />
          <Route path='teams/:teamId/boards/:id' component={Board} />
          <Route path='teams/:teamId/boards/:boardId/actions' component={Actions} />
          <Route path='teams/:teamId/summary' component={Summary} />
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
