import React from 'react';

import longtermImage from '../../assets/longterm-section/ImageSection4.png';

import './styles.css';

const LongTermSection = () => (
  <section className="long-term-section">
    <div>
      <h2>A framework built for the long term</h2>
      <p>
        Childcare is for the long term. And you need a framework you can count on that gives your
        share long term viability and success. That’s why we’ve defined Hapu around our three tribal
        principles; clearly defined process, transparency over money and equality of participation.
      </p>
      <a href="/#">Read how Hapu’s tribal background defines our app </a>
    </div>
    <img src={longtermImage} alt="Your billing history detailed." />
  </section>
);

export default LongTermSection;
