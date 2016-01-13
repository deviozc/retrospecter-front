'use strict';

import React from 'react';
import {Link} from 'react-router'
require('styles/Index.css');

class IndexComponent extends React.Component {
  render() {
    return (
      <header id="top" className="header">
        <div className="text-vertical-center">
          <div className="highlight-div-primary">
            <h1>Retrospecter</h1>
            <h3>Interactive Retrospective Tool</h3>
            <br />
            <Link to="/teams" className="btn btn-dark btn-lg">Get Started</Link>
          </div>
        </div>
      </header>
    );
  }
}

IndexComponent.displayName = 'IndexComponent';

// Uncomment properties you need
// IndexComponent.propTypes = {};
// IndexComponent.defaultProps = {};

export default IndexComponent;
