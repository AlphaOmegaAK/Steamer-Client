import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">Steamer</div>
        <ul className="nav-list">
          <li className="nav-item"><Link className="nav-link" to="/home"></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/users"></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/posts"></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/login"></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/logout"></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;
