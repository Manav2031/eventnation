import React from 'react';
import './Navbar.css'



const Navbar = () => {
  return(
    <div className='navbar'>
      <div className='logo'><a href="#">EventNation</a></div>
      <ul className='links'>
        <li><a href="/">Home</a></li>
        <li><a href='/events'>Events</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <a href="/login" className='action-btn'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Login
      </a>
    </div>
  )
}

export default Navbar
