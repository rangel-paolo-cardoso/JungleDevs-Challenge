import React from 'react';

import hapuSLogo from '../../../../assets/footer-icons/Logo.svg';
import facebookMedia from '../../../../assets/footer-icons/Facebook.svg';
import twitterMedia from '../../../../assets/footer-icons/Twitter.svg';
import instagramMedia from '../../../../assets/footer-icons/Instagram.svg';

import './styles.css';

const SocialMediaContainer = () => (
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
);

export default SocialMediaContainer;
