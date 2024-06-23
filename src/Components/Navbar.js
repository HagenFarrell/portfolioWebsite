// src/components/Navbar.js
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-lg font-semibold">Brand</a>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className={`text-white ${activeSection === 'home' ? 'font-bold border-b-2 border-white' : ''}`}>Home</a>
          <a href="#about" className={`text-white ${activeSection === 'about' ? 'font-bold border-b-2 border-white' : ''}`}>About</a>
          <a href="#projects" className={`text-white ${activeSection === 'projects' ? 'font-bold border-b-2 border-white' : ''}`}>Projects</a>
          <a href="#contact" className={`text-white ${activeSection === 'contact' ? 'font-bold border-b-2 border-white' : ''}`}>Contact</a>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#home" className={`block text-white py-2 ${activeSection === 'home' ? 'font-bold border-b-2 border-white' : ''}`}>Home</a>
          <a href="#about" className={`block text-white py-2 ${activeSection === 'about' ? 'font-bold border-b-2 border-white' : ''}`}>About</a>
          <a href="#projects" className={`block text-white py-2 ${activeSection === 'projects' ? 'font-bold border-b-2 border-white' : ''}`}>Projects</a>
          <a href="#contact" className={`block text-white py-2 ${activeSection === 'contact' ? 'font-bold border-b-2 border-white' : ''}`}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;