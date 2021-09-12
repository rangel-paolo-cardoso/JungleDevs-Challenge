import React from 'react';

import ScheduleContainer from './components/ScheduleContainer';

// import calendarIcon from '../../assets/footer-icons/Icon.svg';
import hapuSLogo from '../../assets/footer-icons/Logo.svg';
import facebookMedia from '../../assets/footer-icons/Facebook.svg';
import twitterMedia from '../../assets/footer-icons/Twitter.svg';
import instagramMedia from '../../assets/footer-icons/Instagram.svg';

import './styles.css';

const Footer = () => (
  <footer className="page-footer">
    {/* <div className="schedule-container">
      <h2>Become a nanny share host</h2>
      <p>Takes less than 5 minutes to get started</p>
      <div className="schedule-nanny-share">
        <img src={calendarIcon} alt="" />
        <div>
          <span>Create Your Nanny Share</span>
          <span>Takes less than 5 minutes</span>
        </div>
      </div>
      <a href="/#">Or browse local nanny-shares</a>
    </div> */}
    <ScheduleContainer />
    <div className="social-media-container">
      <a href="/#">
        <img src={hapuSLogo} alt="Hapu's logo." />
      </a>
      <div className="share-links-container">
        <a href="/#">Share Your Nanny</a>
        <a href="/#">Our Story</a>
        <a href="/#">Blog</a>
        <a href="/#">Terms & Privacy</a>
      </div>
      <div className="media-container">
        <a href="/#">
          <img src={facebookMedia} alt="Facebook media icon." />
        </a>
        <a href="/#">
          <img src={twitterMedia} alt="Twitter media icon" />
        </a>
        <a href="/#">
          <img src={instagramMedia} alt="Instagram media icon" />
        </a>
      </div>
    </div>
    <div className="copyright-container">
      <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
