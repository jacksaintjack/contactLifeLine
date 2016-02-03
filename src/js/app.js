import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { hashHistory } from 'react-router'
//Remove this later
import NavBar from './components/navBar.js';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={NavBar}>

    </Route>
  </Router>
), document.getElementById('app'));
