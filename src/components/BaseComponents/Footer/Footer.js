import React from 'react';
import { Link, Switch } from 'react-router-dom'

import './footer.css';


const Footer = () => {
  return (
    <footer>
      <Switch>
        <ul>
          <li className="footer-list"><Link to='/about' >About</Link></li>
          <li className="footer-list"><Link to='/contact'>Contact</Link></li>
          <li className="footer-list"><Link to='/'>Register</Link></li>
        </ul>
      </Switch>
      <em>Art K 2020</em>
    </footer>

  )
}

export default Footer;