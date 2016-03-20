import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from './components/main.js';
import Home from './components/home.js';
import Programs from './components/programs.js';
import Volunteering from './components/volunteering.js';
import MadSam from './components/madSam.js';
import Sponsors from  './components/sponsors.js';
import ContactUs from './components/contactUs.js';
import OurHistory from './components/ourHistory.js';

ReactDOM.render((
  <Router history={ hashHistory }>
    <Route path='/' component={ Main }>
      <IndexRoute component={ Home }/>
      <Route path='programs' component={ Programs }/>
      <Route path='volunteering' component={ Volunteering }/>
      <Route path='madsam' component={ MadSam }/>
      <Route path='sponsors' component={ Sponsors }/>
      <Route path='contactus' component={ ContactUs }/>
      <Route path='ourHistory' component={ OurHistory }/>
    </Route>
  </Router>
), document.getElementById('app'));
