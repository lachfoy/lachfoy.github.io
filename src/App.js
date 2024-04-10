import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { NavBar } from './components/NavBar';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className='page'>
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
