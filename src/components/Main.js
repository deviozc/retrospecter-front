require('normalize.css');
require('styles/App.css');

import React from 'react';
import { Link } from 'react-router'
let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="body">
        <div id="nav-bar"></div>
        <a id="menu-toggle" href="#" className="btn btn-dark btn-lg toggle"><i className="fa fa-bars"></i></a>
        <nav id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <a id="menu-close" href="#" className="btn btn-light btn-lg pull-right toggle"><i className="fa fa-times"></i></a>
            <li className="sidebar-brand">
              <a href="#top">Start Tool</a>
            </li>
            <li>
              <a href="#top">Start</a>
            </li>
            <li>
              <a href="#create_team">Team Directory</a>
            </li>
            <li>
              <Link to="/teams">Teams</Link>
            </li>
            <li>
              <Link to="/boards">Boards</Link>
            </li>
            <li>
              <a href="#summary">Summary</a>
            </li>
            <li>
              <a href="#footer">Credit</a>
            </li>
          </ul>
        </nav>
      {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
