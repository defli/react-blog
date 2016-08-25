var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
  render: function() {
    return <div className="top-bar">
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
            </div>;
  }
});

module.exports = Header;
