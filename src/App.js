import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Lazy load heavy components for better mobile performance
const Education = lazy(() => import('./components/Education/Education'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

// Loading component
const SectionLoader = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '200px',
    color: 'var(--text-secondary)' 
  }}>
    <div>Loading...</div>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      // Default to dark mode
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : 'light'}`}>
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Suspense fallback={<SectionLoader />}>
          <Education darkMode={darkMode} />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects darkMode={darkMode} />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact darkMode={darkMode} />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Footer darkMode={darkMode} />
        </Suspense>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
