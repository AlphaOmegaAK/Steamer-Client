import React from 'react';
import { Switch, NavLink } from 'react-router-dom'

import './footer.css';


const Footer = (currentUser) => {
  return (
    <footer>
      <Switch>
        <div className="footer-list">

          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          {currentUser && (
            <>
              <NavLink to='/register'>Register</NavLink>
            </>
          )}
          <em>Art K 2020</em>

        </div>
      </Switch>
    </footer>

  )
}

export default Footer;