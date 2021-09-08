import React from 'react';

import badge from '../../../../assets/header-icons/Badge.svg';

import './styles.css';

const NavBar = () => {
  return (
    <nav className="navgation-bar">
      <div className="nav-options">
        <img src={badge} alt="A page bagde with green background ain shape of U." />
        <ul>
          <li><a href="/#">Create Your Nanny Share</a></li>
          <li><a href="/#">Browse Shares</a></li>
          <li><a href="/#">Our Story</a></li>
        </ul>
      </div>
      <div className="subscribe-options">
        <button type="button">Become a Nanny Share Host</button>
        <a href="/#">Sign up</a>
      </div>
    </nav>
  );
};

export default NavBar;