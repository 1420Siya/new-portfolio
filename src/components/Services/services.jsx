// src/components/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2>My Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Web Design</h3>
            <p>Beautiful and responsive web design solutions that cater to your business needs.</p>
          </div>
          <div className="service-item">
            <h3>Web Development</h3>
            <p>Building interactive and dynamic websites with the latest technologies.</p>
          </div>
          <div className="service-item">
            <h3>SEO Optimization</h3>
            <p>Improve your search engine rankings and increase online visibility with expert SEO services.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
