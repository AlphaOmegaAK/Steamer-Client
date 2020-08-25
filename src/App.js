import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from './components/BaseComponents/Nav/NavBar';
import Footer from './components/BaseComponents/Footer/Footer'
import Routes from './config/routes'


import './App.css';



class App extends React.Component {
  state = {
    loggedIn: false,
  };

  componentDidMount() {


  }

  redirectHome = () => {
    this.setState({
      loggedIn: true,
    })
  }

  render() {
    return (
      <div className="App">

        <NavBar />
        {Routes}

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
