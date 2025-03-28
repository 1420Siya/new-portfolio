// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message" required></textarea>

          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
