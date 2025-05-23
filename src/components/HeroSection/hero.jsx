import React from "react";
import image1 from "/src/images/image1.jpg"; 
import "./hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src={image1} alt="Background" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Building amazing web experiences with React and
           inspiring the youth to discover or unlock their talents</p>
        <a href="#contact" className="btn">Get in Touch</a>
      </div>
    </section>
  );
};

export default HeroSection;
