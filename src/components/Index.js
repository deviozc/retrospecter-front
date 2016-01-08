'use strict';

import React from 'react';
// require('styles/Index.css');
class IndexComponent extends React.Component {
  render() {
    return (
      <header id="top" className="header">
    <div className="text-vertical-center">
        <div className="highlight-div-primary">
            <h1>Retrospecter</h1>

            <h3>Interactive Retrospective Tool</h3>
            <br />
            <a href="#teams" className="btn btn-dark btn-lg">Get Started</a>
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
