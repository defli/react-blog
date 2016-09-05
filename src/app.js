import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

import Posts from './components/Posts';

import Create from './components/form/Create';
import Login from './components/form/Login';

import HomePage from './components/HomePage';
import NoMatch from './components/NoMatch';

ReactDom.render((
  <Router history={hashHistory}>
    <Route path="/" component={HomePage}>
      <IndexRoute component={Posts}/>
      <Route path="create" component={Create} />
      <Route path="login" component={Login} />
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('content'));
