import React, { useState } from 'react';

import api from '../../services/api';

import Input from './components/Input';
import LoadingEffect from './components/LoadingEffect';

import './styles.css';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmitNewsLetter = async (event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const response = await api.post('/', {
        name,
        email,
      });
      setResponseMessage(response?.data?.detail);
    } catch (error) {
      setResponseMessage(`Something went wrong! ${error?.message}`);
    } finally {
      setLoading(false);
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
        <Input
          id="userName"
          name="userName"
          type="text"
          placeholder="Your name"
          required
          onChange={setName}
        />
        <Input
          id="userEmail"
          name="userEmail"
          type="text"
          placeholder="Your email"
          required
          onChange={setEmail}
        />
        <button type="submit">Send</button>
        <p className="status-message">
          {loading ? <LoadingEffect /> : null}
          {responseMessage === 'Ok.' ? (
            <strong className="success">{responseMessage}</strong>
          ) : (
            <strong className="fail">{responseMessage}</strong>
          )}
        </p>
      </form>
    </section>
  );
};

export default ContactSection;
