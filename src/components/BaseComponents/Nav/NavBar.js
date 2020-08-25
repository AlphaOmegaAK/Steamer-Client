import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="logo">Steamer</div>
          <ul className="nav-list">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/users">Users</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/posts">Posts</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/logout">Logout</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;
