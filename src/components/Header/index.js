import React from 'react';

import NavBar from './components/NavBar';

import playbutton from '../../assets/header-icons/Playbutton.svg';
import imageHeader from '../../assets/header-icons/ImageHeader.png';

import './styles.css';

const Header = () => {
  return (
    <header className="header-section">
      <NavBar />
      <div className="page-presentation">
        <div>
          <h1>Easily create or join a local nanny share with Hapu</h1>
          <p>
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible,
            affordable solutions in childcare.
          </p>
          <div className="header-action">
            <img src={playbutton} alt="A play button with a green color." />
            <a href="/#">See hapu in action (27 seconds)</a>
          </div>
        </div>
        <img src={imageHeader} alt="Example of Nanny's finding" />
      </div>
    </header>
  );
};

export default Header;
