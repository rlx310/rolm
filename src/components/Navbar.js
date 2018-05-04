import React from 'react'
import Hamburger from './Hamburger'

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-wrapper">
      <Hamburger />
      <a href="#" className="brand-logo">
        UCode
      </a>
      <ul className="right">
        <li><a></a></li>
        <li><a>JTammy</a></li>
        <li><a>Timmy Peters</a></li>
      </ul>
    </div>
  </nav>
)

export default Navbar