import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import NavBar from './components/navBar.js';
import Home from './components/home.js';
import Programs from './components/programs.js';
import Volunteering from './components/volunteering.js';
import MadSam from './components/madSam.js';
import Sponsors from  './components/sponsors.js';
import Espanol from './components/espanol.js';
import ContactUs from './components/contactUs.js';

ReactDOM.render((
  <Router history={ hashHistory }>
    <Route path='/' component={ NavBar }>
      <IndexRoute component={ Home }/>
      <Route path='programs' component={ Programs }/>
      <Route path='volunteering' component={ Volunteering }/>
      <Route path='madsam' component={ MadSam }/>
      <Route path='sponsors' component={ Sponsors }/>
      <Route path='espanol' component={ Espanol }/>
      <Route path='contactus' component={ ContactUs }/>
    </Route>
  </Router>
), document.getElementById('app'));
