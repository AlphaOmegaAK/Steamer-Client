import React from 'react';
import { Switch, NavLink } from 'react-router-dom'

import './footer.css';


const Footer = () => {
  return (
    <footer>
      <Switch>
        <div footer-links>
          <ul>
            <li className="footer-list"><NavLink to='/about'>About</NavLink></li>
            <li className="footer-list"><NavLink to='/contact'>Contact</NavLink></li>
            <li className="footer-list"><NavLink to='/register'>Register</NavLink></li>
          </ul>
        </div>
      </Switch>
      <em>Art K 2020</em>
    </footer>

  )
}

export default Footer;