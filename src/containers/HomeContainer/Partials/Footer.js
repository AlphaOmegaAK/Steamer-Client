import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer>
      <Link to='About'>About</Link>

      <Link to='Contact'>Contact</Link>
      <em>@copy Art K</em>
    </footer>
  )
}
