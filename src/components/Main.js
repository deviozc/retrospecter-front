require('normalize.css');
require('styles/App.css');

import React from 'react';
import { Link } from 'react-router'
let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/boards">Board</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
