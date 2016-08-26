var React = require('react');
var Header = require('./Header');
var Posts = require('./Posts');
var Create = require('./form/Create');

var HomePage = React.createClass({
  render: function() {
    return <div>
        <Header />
        { this.props.children }
        <Posts />
      </div>;
  }
});

module.exports = HomePage;
