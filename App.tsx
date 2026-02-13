import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Methodology from './components/Methodology';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* The new creative section for tech stack */}
        <TechStack />
        {/* Featured Projects Section (Design & Dev) */}
        <Projects />
        {/* The methodology section from the reference */}
        <div className="relative pt-0"> 
          {/* Spacer/Container for methodology */}
          <Methodology />
        </div>
        {/* Contact Section */}
        <Contact />
      </main>
      
      <footer className="bg-white py-8 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center text-gray-400 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Milagros Vairo.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;