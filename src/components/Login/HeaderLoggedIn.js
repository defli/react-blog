
import React, {Component} from 'react';

class HeaderLoggedIn extends Component {
  render() {
    return (
      <p className="navbar-text navbar-right">
        Signed in as <a href="#" className="navbar-link">Mark Otto</a>
        <a href="/#login" className="btn btn-default">Log Out</a>
      </p>
    );
  }
}

export default HeaderLoggedIn;
