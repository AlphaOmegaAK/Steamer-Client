// Routes Folder

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Home';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
  </Switch>
)
