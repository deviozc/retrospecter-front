'use strict';

import React from 'react';

import ItemStore from '../stores/ItemStore';

let getStateFromStore = () => {
  /*
  let state = {};

  let items = ItemStore.getAll();

  for (let item of items) {
    if (state[item.category]) {
      state[item.category].push(item);
    } else {
      state[item.category] = [item]
    }
  }

  return state;
  */

  return {
    GOOD: [
      {
        id: 'abc',
        name: 'dafsdf'
      },
      {
        id: 'abc1',
        name: 'dafsdf'
      },
      {
        id: 'abc2',
        name: 'dafsdf'
      },
      {
        id: 'abc3',
        name: 'dafsdf'
      },
    ],
    IDEA: [
    ],
    BAD: [],
    ACHIEVEMENT: [
      {
        id: 'abc',
        name: 'dafsdf'
      },
      {
        id: 'abc1',
        name: 'dafsdf'
      },
      {
        id: 'abc2',
        name: 'dafsdf'
      },
      {
        id: 'abc3',
        name: 'dafsdf'
      },
    ]
  }
};

let Item = React.createClass({
  render() {
    return (
      <li>
        <div className="sticky-body">{this.props.data.name}</div>
        <div className="text-right sticky-footer">
          <button type="button" className="btn btn-link pull-left" data-toggle="modal" data-target="#AddSticky" ><i className="fa fa-pencil"></i></button>
          <button type="button" className="btn btn-link pull-right"><i className="fa fa-thumbs-up"></i></button>
        </div>
      </li>
    );
  }
});

let Category = React.createClass({
  render() {
    return (
      <div className="col-md-6 sticky-bg">
        <ul className="sticky-item">
          {this.props.data.map((item) => {
            return <Item key={item.id} data={item} />
          })}
        </ul>
      </div>
    )
  }
});

let Board = React.createClass({
  getInitialState() {
    return getStateFromStore();
  },

  componentDidMount() {
    ItemStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    ItemStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(getStateFromStore());
  },

  render() {
    return (
      <section id="boardPage" className="boards">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>Board Name</h2>
              <hr className="small" />
            </div>
            <div className="col-lg-12 text-right ">
              <button type="button" data-toggle="modal" data-target="#AddSticky" className="btn btn-dark ">Add
                Sticky <span className="fa-stack fa-1x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-plus fa-stack-1x text-dark"></i>
              </span></button>
            </div>
          </div>
          <div className="row sticky-row-one">
            <Category data={this.state.GOOD} />
            <Category data={this.state.BAD} />
          </div>

          <div className="row sticky-row-two">
            <Category data={this.state.IDEA} />
            <Category data={this.state.ACHIEVEMENT} />
          </div>
          <br />

          <p className="text-center"><a href="#summary" className="btn btn-dark text-center">Go To Summary</a></p>
        </div>
      </section>
    )
  }
});

export default Board
