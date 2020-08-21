import React from 'react';
import NavBar from './Partials/NavBar';
import Footer from './Partials/Footer';


export default class HomePage extends React.Component {


  render() {
    return (
      <div>
        <NavBar />
        <h1>Home Page</h1>
        <Footer />
      </div>
    )
  }
}
