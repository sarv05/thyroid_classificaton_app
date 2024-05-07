import React from 'react';
import './Navbar.css'; // import CSS file for styling

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <p>Thyroid Classification App</p>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
      </ul>
    </div>
  );
}

export default Navbar;
