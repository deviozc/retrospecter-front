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
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/board">Board</Link></li>
        </ul>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
