import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
      <div className="topnav">
        <div className="topnav-centered">
          <a href="#home" class="active">
            Home
          </a>
        </div>
          <a href="#news">
            News
          </a>
          <Link to="/contact">
              Contact
          </Link>
        <div className="topnav-right">
          <a href="#search">
            Options
          </a>
          <a href="#about">
            About
          </a>
        </div>
      </div>
        )
}

export default Nav
