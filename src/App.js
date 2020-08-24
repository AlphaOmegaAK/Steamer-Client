import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/Nav/NavBar';
import Routes from './config/routes'

import PostListContainer from './containers/PostListContainer/PostListContainer'

import './App.css';



class App extends React.Component {
  state = {

  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <NavBar />
        {/* <Routes /> */}
        <PostListContainer />
      </div>
    );
  }
}

export default App;
