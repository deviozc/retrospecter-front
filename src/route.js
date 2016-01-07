'use strict';

import React, { Component } from 'react';
import { Router, IndexRoute, Route, browserHistory} from 'react-router';

import App from './components/Main';
import Team from './components/TeamComponent';
import Board from './components/BoardComponent';
import Index from './components/Index';

class RetroRoute extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Index} />
          <Route path='about' component={Team} />
          <Route path='team' component={Team}>
            <Route path='team/:id' component={Team} />
          </Route>
          <Route path='/board' component={Board}>
            <Route path='/board/:id' component={Board} />
          </Route>
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
