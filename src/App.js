import React from 'react';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import NavBar from './components/BaseComponents/Nav/NavBar';
import Footer from './components/BaseComponents/Footer/Footer'
import Routes from './config/routes'
import setAuthHeader from './utils/setAuthHeaders'

import './App.css';



class App extends React.Component {
  state = {
    currentUser: localStorage.getItem('token'),
  };

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      setAuthHeader(token)
      const decodedToken = jwt_decode(token)
      this.setState({ currentUser: decodedToken.id })

    }
  }

  setCurrentUser = (token) => {
    localStorage.setItem('token', token)
    setAuthHeader(token);

    const decodedToken = jwt_decode(token);
    this.setState({ currentUser: decodedToken.id })

  }

  logout = () => {
    localStorage.removeItem('token');

    setAuthHeader();

    this.setState({ currentUser: '' })

    this.props.history.push('/login');
  }


  render() {
    return (
      <React.Fragment>


        <NavBar logout={this.logout} />
        <div className="container">
          <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
        </div>
        <Footer />

      </React.Fragment>
    );
  }
}

export default withRouter(App);
