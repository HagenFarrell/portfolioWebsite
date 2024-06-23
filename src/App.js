// src/App.js
import React from 'react';
import Navbar from './Components/Navbar'; // Ensure this matches the directory name
import './styles.css'; // Ensure this matches the filename

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home" className="container mx-auto my-8 p-6">
        <h1 className="text-4xl">Welcome to My Portfolio</h1>
        <p className="mt-4">This is a Three.js animation:</p>
      </section>
      <section id="about" className="container mx-auto my-8 p-6">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-4">Information about yourself.</p>
      </section>
      <section id="projects" className="container mx-auto my-8 p-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="mt-4">Showcase your projects here.</p>
      </section>
      <section id="contact" className="container mx-auto my-8 p-6">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4">Contact information.</p>
      </section>
    </div>
  );
};

export default App;