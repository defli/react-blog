
import React, {Component} from 'react';

class HeaderLoggedOut extends Component {
  render() {
    return (
      <div className="navbar-form navbar-right">
        <a href="/#login" className="btn btn-default">Log In</a>
      </div>
    );
  }
}

export default HeaderLoggedOut;
