import React from 'react';
import { Link } from "react-router-dom"
import  "./Navbar.css";

const Navbar = props => {
  return (
    <nav className='navbar'>
      <Link to='/home' className='brand'>
        Coach Me
      </Link>
      <ul className="nav-menu">
        <li className="nav-menu--item">Become a Coach</li>
        <li className="nav-menu--item">Programs</li>
        <li className="nav-menu--item">Log In</li>
        <li className="nav-menu--item">Start Training</li>
      </ul>

    </nav>
  )
}

export default Navbar
