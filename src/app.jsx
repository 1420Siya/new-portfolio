import React from 'react'
import './app.css'

// Import all components
import Header from './Components/header/header.jsx'
import Home from './Components/hero/home'
import About from './Components/about/about'
import Resume from './Components/resume/resume'
import Services from './Components/Services/services'
import Skills from './Components/skills/skills'
import Projects from './Components/projects/projects'
import Blog from './Components/blogs/blogs'
import Contact from './Components/contact/contact'
import Footer from './Components/footer/footer'

function App() {
  return (
    <div className="app">
      <Header />
      
      <main>
        <Home />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App