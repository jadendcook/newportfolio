import './App.css';
import About from './about/about-component.js';
import Navbar from './navbar/navbar-component';
import Home from './home/home-component.js'
import './home/style.js'
import Skills from './skills&tools/skills&tools-component.js';
import Projects from './projects/projects-component.js';
import Contact from './contact/contact-component';

import React from 'react';





function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
