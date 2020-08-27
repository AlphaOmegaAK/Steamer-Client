// Routes Folder

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// Base Components
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Home';
//? Post Containers
import PostListContainer from '../containers/Posts/PostListContainer/PostListContainer'
import PostContainer from '../containers/Posts/PostContainer/PostContainer'
import NewPostContainer from '../containers/Posts/NewPostContainer/NewPostContainer';
import EditPostContainer from '../containers/Posts/EditPostContainer/EditPostContainer';

//? User Containers
import UserListContainer from '../containers/Users/UserListContainer/UserListContaine';
import UserContainer from '../containers/Users/UserContainer/UserContainer';


// Auth Components
import Register from '../components/AuthComponent/Register';
import Login from '../components/AuthComponent/Login';



export default ({ currentUser, setCurrentUser }) => (
  <Switch>

    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />

    <Route path='/posts/new' component={NewPostContainer} />
    {/* <Route path="/posts/new" render={() =>
      currentUser
        ? <NewPostContainer />
        : <Redirect to='/login' />
    } /> */}

    <Route path='/posts/:id/edit' component={EditPostContainer} />
    <Route path='/posts/:id' component={PostContainer} />
    <Route path='/posts' component={PostListContainer} />
    <Route path='/users/:id' component={UserContainer} />
    <Route path='/users' component={UserListContainer} />
    <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} />} />
    <Route path='/register' component={Register} />

  </Switch>
);
