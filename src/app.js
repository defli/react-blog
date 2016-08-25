var React = require('react');
var ReactDom = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;

var HomePage = require('./HomePage');
var Create = require('./Create');
var NoMatch = require('./NoMatch');

ReactDom.render((
  <Router history={hashHistory}>
    <Route path="/" component={HomePage}>
      <Route path="create" component={Create} />
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('content'));
