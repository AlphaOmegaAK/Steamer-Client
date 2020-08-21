import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/' />Home
        </li>
        <li>
          <Link to='posts' />Posts
        </li>
        <li>
          <Link to='Profile' /> Profile
        </li>
        <li>
          <Link to='Login' /> Login
        </li>
      </ul>
    </nav>
  )
}