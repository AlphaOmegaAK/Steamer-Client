import React from 'react';
import { Switch, NavLink } from 'react-router-dom'

import './footer.css';


const Footer = (currentUser) => {
  return (
    <footer>
      <Switch>
        <div className="footer-list">

          <NavLink className="footer-link" to='/about'>About</NavLink>
          <NavLink className="footer-link" to='/contact'>Contact</NavLink>
          {currentUser && (
            <>
              <NavLink className="footer-link" to='/register'>Register</NavLink>
            </>
          )}

        </div>
      </Switch>
    </footer>

  )
}

export default Footer;