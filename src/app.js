import React from 'react';
import ReactDom from 'react-dom';

import { Router } from 'react-router';
import { Route } from 'react-router';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

import Create from './components/form/Create';
import HomePage from './components/HomePage';
import NoMatch from './components/NoMatch';

ReactDom.render((
  <Router history={hashHistory}>
    <Route path="/" component={HomePage}>
      <Route path="create" component={Create} />
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('content'));
