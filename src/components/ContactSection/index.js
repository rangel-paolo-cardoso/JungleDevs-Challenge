import React from 'react';

import GrayBar from '../GrayBar';

import './styles.css';

const ContactSection = () => (
  <section className="contact-section">
    <h3>Are you a parent without a nanny and looking to share?</h3>
    <p>
      Leave us your name and email and we’ll update you as soon as a share becomes available in your
      area!
    </p>
    <form action="#">
      <input type="text" placeholder="Your name" />
      <input type="text" placeholder="Your email" />
      <button type="button">Send</button>
    </form>
    <GrayBar />
  </section>
);

export default ContactSection;
