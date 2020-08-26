// Routes Folder

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Home';
import PostListContainer from '../containers/Posts/PostListContainer/PostListContainer'
import PostContainer from '../containers/Posts/PostContainer/PostContainer'
import NewPostContainer from '../containers/Posts/NewPostContainer/NewPostContainer';
import Register from '../components/AuthComponent/Register';
import Login from '../components/AuthComponent/Login';



export default (
  <Switch>

    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/posts/new' component={NewPostContainer} />
    <Route path='/posts/:id' component={PostContainer} />
    <Route path='/posts' component={PostListContainer} />
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />

  </Switch>
)
