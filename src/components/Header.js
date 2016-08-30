import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">My First React Blog Example</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <Link to="/create">
                <button type="button" className="button">Create A Post</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Header;
