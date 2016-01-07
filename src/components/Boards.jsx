'use strict';

import React from 'react';

require('styles//Board.css');

let Item = React.createClass({
  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
});

class Boards extends React.Component {
  constructor() {
    super();

    this.state = {
      results: []
    };
  }

  componentDidMount() {
    this.setState({
      results: ['a','b']
    });
  }

  render() {
    return (
      <div className="boards-component">
        Please edit src/components///BoardComponent.js to update this component!
        <ul>
          {this.state.results.map((result, index) => {
            return <Item key={index} name={result} />
          })}
        </ul>
      </div>
    );
  }
}

Boards.displayName = 'BoardsComponent';

// Uncomment properties you need
// BoardComponent.propTypes = {};
// BoardComponent.defaultProps = {};

export default Boards;
