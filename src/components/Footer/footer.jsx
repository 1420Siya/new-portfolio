// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} masilela siyabonga. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
