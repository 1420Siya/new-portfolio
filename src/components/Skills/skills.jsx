// src/components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skill-list">
          <div className="skill-item">
            <h3>React.js</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <h3>JavaScript</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <h3>HTML & CSS</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: '95%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
