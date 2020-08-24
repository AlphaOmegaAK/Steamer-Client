import React from 'react';
import { Link, Switch } from 'react-router-dom'
import About from '../../../pages/About'
import Contact from '../../../pages/Contact'

import './footer.css';


const Footer = () => {
  return (
    <footer>
      <Switch>
        <ul>
          <li className="footer-list"><Link to='/about' component={About}>About</Link></li>
          <li className="footer-list"><Link to='/contact' component={Contact}>Contact</Link></li>
          <li className="footer-list"><Link to='/'>Site Map</Link></li>
        </ul>
      </Switch>
    </footer>

  )
}

export default Footer;