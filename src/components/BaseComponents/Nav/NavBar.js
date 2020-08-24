import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">Steamer</div>
        <ul className="nav-list">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/posts">Posts</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/login" >Login</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;
