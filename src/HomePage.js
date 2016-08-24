var React = require('react');
var Header = require('./Header');
var Posts = require('./Posts');
var HomePage = React.createClass({
  render: function() {
    return <div>
        <Header />
        <Posts />
      </div>;
  }
});

module.exports = HomePage;
