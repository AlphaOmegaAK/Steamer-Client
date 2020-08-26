import React from 'react';
import { Switch, NavLink } from 'react-router-dom'

import './footer.css';


const Footer = () => {
  return (
    <footer>
      <Switch>
        <div class="footer-list">
          <ul>
            <li className="footer-link"><NavLink to='/about'>About</NavLink></li>
            <li className="footer-link"><NavLink to='/contact'>Contact</NavLink></li>
            <li className="footer-link"><NavLink to='/register'>Register</NavLink></li>
            <em>Art K 2020</em>
          </ul>
        </div>
      </Switch>
    </footer>

  )
}

export default Footer;