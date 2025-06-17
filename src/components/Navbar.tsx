import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-title">MyPage</div>
    <div className="navbar-links">
      <Link to="/" className="nav-btn">Home</Link>
      <Link to="/about" className="nav-btn">About Us</Link>
      <Link to="/contact" className="nav-btn">Contact</Link>
    </div>
  </nav>
);

export default Navbar
