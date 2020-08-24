import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/BaseComponents/Nav/NavBar';
import Footer from './components/BaseComponents/Footer/Footer'
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
        <Footer />
      </div>
    );
  }
}

export default App;
