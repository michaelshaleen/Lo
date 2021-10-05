import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (

    <nav class="navbar">
    <div class="brand-title">
      <div className="navbar-links">
        <ul>
          <li>
          <Link to="/" className="brand-title">
            Pro by Lo
          </Link>
          </li>
        </ul>
      </div>
      </div>
    <a href="#" class="toggle-button">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </a>
    <div class="navbar-links">
      <ul>
        <li>
          <Link 
            to="/contact">
            Contact
            </Link>
          </li>
        <li>
          <Link to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link to="/">
            About
          </Link>
        </li>
      </ul>
    </div>
  </nav>




      // <div className="topnav">
      //   <div className="topnav-centered">
      //     <a href="#home" class="active">
      //       Home
      //     </a>
      //   </div>
      //     <a href="#news">
      //       News
      //     </a>
      //     <Link to="/contact">
      //         Contact
      //     </Link>
      //   <div className="topnav-right">
      //     <a href="#search">
      //       Options
      //     </a>
      //     <a href="#about">
      //       About
      //     </a>
      //   </div>
      // </div>
        )
}

export default Nav
