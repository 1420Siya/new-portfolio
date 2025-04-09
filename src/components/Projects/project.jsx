// src/components/Projects.js
import React from 'react';
import './project.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <img src="https://via.placeholder.com/400x250" alt="Project 1" />
            <div className="project-info">
              <h3>Project 1</h3>
              <p>website creations</p>
              <a href="/" className="btn">View Project</a>
            </div>
          </div>
          <div className="project-item">
            <img src="https://via.placeholder.com/400x250" alt="Project 2" />
            <div className="project-info">
              <h3>Project 2</h3>
              <p>Sport sciences services</p>
              <a href="/" className="btn">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
