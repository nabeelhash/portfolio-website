import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contacts';
import Projects from './pages/Projects';
import Testimonial from './pages/Testimonial';

const App = () => {
  return (
    <BrowserRouter>
      <RouteTransitions />
    </BrowserRouter>
  );
};

const RouteTransitions = () => {
  const location = useLocation();
  const containerRef = useRef(null);

  // Trigger GSAP animation on route change
  useEffect(() => {
    if (containerRef.current) {

      // Now animate the page sliding from the right
      gsap.fromTo(
        containerRef.current,
        {
          x: '100%', // Start the page off-screen to the right
          opacity: 0,

        },
        {
          x: 0, // Slide into view
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }
      );
    }
  }, [location]);

  return (
    <div className='overflow-hidden font-mono'>
      <div className='transform bg-gradient-to-r from-gray-800 to-purple-950  absolute translate-x-0  h-screen w-full '></div>
      <div ref={containerRef} className="page-container">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonial" element={<Testimonial />} />

        </Routes>
      </div>

    </div>

  );
};

export default App;