import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css';
import SteamerNav from '../../../images/SteamerNav.png'

const NavBar = ({ currentUser, logout }) => {
  return (
    <header>
      <nav bg='dark'>

        <NavLink className="logo" exact to="/"> <img src={SteamerNav} alt="" /></NavLink>

        <div className="nav-list">
          <React.Fragment>
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>

            <li className="nav-item"><NavLink className="nav-link" to="/posts">Posts</NavLink></li>
            {/* {!currentUser && (
            <> */}
            <li className="nav-item"><NavLink className="nav-link" to="/users">Users</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
            {/* </>
          )} */}
            {/* {currentUser && ( */}

            <li className="nav-item" onClick={logout} to="/logout">
              <NavLink className="nav-link" to="/logout">
                Logout
               </NavLink>
            </li>
          </React.Fragment>

          {/* )} */}
        </div>



      </nav>
    </header>

  )
}

export default NavBar;
