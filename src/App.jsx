import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Why from './components/Why';
import Audience from './components/Audience';
import Vision from './components/Vision';
import Contribute from './components/Contribute';
import Footer from './components/Footer';
import './App.css';

import HowItWorks from './components/HowItWorks';
import Roadmap from './components/Roadmap';

function App() {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Apply theme to document and save to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Mission />
        <Why />
        <HowItWorks />
        <Audience />
        <Vision />
        <Roadmap />
        <Contribute />
      </main>
      <Footer />
    </div>
  );
}

export default App;
