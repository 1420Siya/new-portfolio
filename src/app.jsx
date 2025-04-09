import React from 'react';
import './index.css';
import './animatedhero.css'; // Ensure this is the correct path

// Import all components
import Header from './components/Header/header';
import HeroSection from './components/HeroSection/hero';
import About from './components/AboutSection/about';
import Resume from './components/Resume/resume';
import Services from './components/Services/services';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/project';
import Blog from './components/Blog/blog';
import Contacts from './components/Contacts/contacts';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="app">
      {/* Background animation */}
      <div className="animated-bg"></div>
      
      {/* Floating animated emojis */}
      <div className="emoji">😊</div>
      <div className="emoji">🔥</div>
      <div className="emoji">🚀</div>
      <div className="emoji">💡</div>
      <div className="emoji">🎨</div>

      <Header />
      
      <main>
        <HeroSection />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Projects />
        <Blog />
        <Contacts />
      </main>

      <Footer />
    </div>
  );
}

export default App;
