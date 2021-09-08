import React from 'react';

import badge from '../../assets/header-icons/Badge.svg';
import playbutton from '../../assets/header-icons/Playbutton.svg';

import './styles.css';

const Header = () => {
  return (
    <header className="header-section">
      <div className="upper-header">
        <img src={badge} alt="A page bagde with green background ain shape of U." />
        <button type="button">Become a Nanny Share Host</button>
      </div>
      <div className="page-presentation">
        <h1>Easily create or join a local nanny share with Hapu</h1>
        <p>
          Hapu is Airbnb for nanny share. Share your home,
          nanny and costs and create new flexible, affordable solutions in childcare.
        </p>
      </div>
      <div className="header-action">
        <img src={playbutton} alt="A play button with a green color." />
        <a href="/#">See hapu in action (27 seconds)</a>
      </div>
    </header>
  );
};

export default Header;