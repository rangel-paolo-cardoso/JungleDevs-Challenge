import React from 'react';

import ScheduleContainer from './components/ScheduleContainer';
import SocialMediaContainer from './components/SocialMediaContainer';

import './styles.css';

const Footer = () => (
  <footer className="page-footer">
    <ScheduleContainer />
    <SocialMediaContainer />
    <div className="copyright-container">
      <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
