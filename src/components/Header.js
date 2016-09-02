import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Quotes</a>
          </div>
          <div className="navbar-form navbar-right">
            <a href="/#login" className="btn btn-default">Login</a>
          </div>
        </div>
      </nav>
    );
  }
};

export default Header;
