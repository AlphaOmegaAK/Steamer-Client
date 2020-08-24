import React from 'react';
import { Link } from 'react-router-dom'

import './footer.css';


const Footer = () => {
  return (
    <footer>
      <ul>
        <li className="footer-list"><Link to='/about'>About</Link></li>
        <li className="footer-list"><Link to='/contact'>About</Link></li>
        <li className="footer-list"><Link to='/'>Site Map</Link></li>
      </ul>
    </footer>
  )
}

export default Footer;