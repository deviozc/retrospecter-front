require('normalize.css');
require('styles/App.css');

import React from 'react';
import { Link } from 'react-router'
let yeomanImage = require('../images/yeoman.png');
let ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {menuIsOpen: false};
  }
  openMenu(e) {
    e.preventDefault();
    this.setState({menuIsOpen: true});
  }
  closeMenu(e) {
    e.preventDefault();
    this.setState({menuIsOpen: false});
  }
  render() {
    return (
      <div className="body">
        <div id="nav-bar"></div>
        <a id="menu-toggle" href="#" onClick={this.openMenu.bind(this)} className="btn btn-dark btn-lg toggle"><i className="fa fa-bars"></i></a>
        <nav id="sidebar-wrapper" className={this.state.menuIsOpen ? "":"hidden"}>
          <ul className="sidebar-nav">
            <a id="menu-close" href="#" onClick={this.closeMenu.bind(this)} className="btn btn-light btn-lg pull-right toggle"><i className="fa fa-times"></i></a>
            <li className="sidebar-brand">
              <a href="/">Home</a>
            </li>
            <li>
              <Link to="/teams">Teams</Link>
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
