import React from 'react';
import './Header.css'; // import CSS file for styling
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <Link to='/'>
        <p>Thyroid Classification App</p>
        </Link>
      </div>
      <ul className="nav-menu">
        <Link to='/'>
        <li>Home</li>
        </Link>
        <Link to='/about'>
        <li>About</li>
        </Link>
        <Link to='/sign-up'>
        <li>Sign In</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
