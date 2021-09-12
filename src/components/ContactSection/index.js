import React, { useState } from 'react';
import Swal from 'sweetalert2';

import GrayBar from '../GrayBar';
import api from '../../services/api';

import './styles.css';

const ContactSection = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleSubmitNewsLetter = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('/', {
        "name": userName,
        "email": userEmail,
      });
      Swal.fire({
        icon: 'success',
        title: 'Newsletter registration successful!',
        text: response?.data?.detail,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong!',
        text: error?.message,
      });
    }
  };

  return (
    <section className="contact-section">
      <h3>Are you a parent without a nanny and looking to share?</h3>
      <p>
        Leave us your name and email and we’ll update you as soon as a share becomes available in
        your area!
      </p>
      <form onSubmit={handleSubmitNewsLetter}>
        <input
          id="userName"
          name="userName"
          type="text"
          placeholder="Your name"
          required
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          id="userEmail"
          name="userEmail"
          type="text"
          placeholder="Your email"
          required
          pattern="^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          onChange={(event) => setUserEmail(event.target.value.toLowerCase())}
        />
        <button type="submit">Send</button>
      </form>
      <GrayBar />
    </section>
  );
};

export default ContactSection;
