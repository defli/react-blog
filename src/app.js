import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

import Posts from './components/Home/Posts';

import Login from './components/Login/Login';

import Layout from './components/Layout';
import NoMatch from './components/NoMatch';

let config = {
  apiKey: "AIzaSyAM82T0w52m2cia8t8xc5JGf8JJJzV1ctk",
  authDomain: "react-blog-b49f0.firebaseapp.com",
  databaseURL: "https://react-blog-b49f0.firebaseio.com",
  storageBucket: "react-blog-b49f0.appspot.com",
};
firebase.initializeApp(config);


ReactDom.render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Posts}/>
      <Route path="login" component={Login} />
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('content'));
