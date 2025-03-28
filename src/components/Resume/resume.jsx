// src/components/Resume.js
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div className="resume-container">
        <h2>My Resume</h2>
        <div className="resume-content">
          <div className="experience">
            <h3>Work Experience</h3>
            <div className="job">
              <h4>Sport scientist</h4>
              <p>University of Johannesburg</p>
              <span className="job-duration">Jan 2023 - Present</span>
              <ul>
                <li>Developed and trained many pro athletes to maintain physical fitnes</li>
                <li>Collaborated with medical students to keep athletes healthy thought training season</li>
              </ul>
            </div>
            <div className="job">
              <h4>software engineerr</h4>
              <p>Etihuku</p>
              <span className="job-duration">Jun 2018 - Dec 2019</span>
              <ul>
                <li>Created visually appealing website designs from scratch.</li>
                <li>Worked closely with developers to ensure design accuracy.</li>
                <li>Improved user experience through responsive design principles.</li>
              </ul>
            </div>
          </div>
          <div className="education">
            <h3>Education</h3>
            <div className="degree">
              <h4>Bachelor of Sports Sciences</h4>
              <p>University of Pretoria</p>
              <span className="degree-duration">2024 - present</span>
            </div>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML & CSS</li>
              <li>Node.js</li>
              <li>Git & GitHub</li>
             
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
