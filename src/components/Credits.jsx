'use strict';

import React from 'react';

let Credits = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-lg-10 col-lg-offset-1 text-center">
                <h2>Thanks to Our Team</h2>
                <hr className="small" />

                <ul className="list-unstyled">
                    <li><h3>Alex Vicol</h3></li>
                    <li><h3>Jackie Zhou</h3></li>
                    <li><h3>Limian Wang</h3></li>
                    <li><h3>Wesley Lam</h3></li>
                    <li><h3>William Chen</h3></li>
                </ul>
                <br/>
                <hr className="small" />
                <p className="text-muted">Copyright &copy; Hackathon 2016</p>
            </div>
        </div>
    </div>
    );
  }
});

export default Credits
