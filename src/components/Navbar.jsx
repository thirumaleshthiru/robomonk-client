import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/homepage/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside or pressing escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const handleClickOutside = (e) => {
      // Check if click is outside the side drawer
      if (isOpen && e.target.closest('.side-drawer') === null && e.target.closest('button') === null) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    // Prevent scrolling when drawer is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-3 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img
                src={logo}
                alt="RoboMonk Logo"
                className="h-48 w-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-4 space-x-4 mt-3">
            <div className="flex space-x-2">
              <a 
                href="#" 
                className="text-indigo-600 hover:text-indigo-800 px-3 py-2 text-md font-medium transition-all duration-300 ease-in-out relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Clubs
              </a>
              <a 
                href="#" 
                className="text-indigo-600 hover:text-indigo-800 px-3 py-2 text-md font-medium transition-all duration-300 ease-in-out relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Sports
              </a>
              <a 
                href="#" 
                className="text-indigo-600 hover:text-indigo-800 px-3 py-2 text-md font-medium transition-all duration-300 ease-in-out relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Bootcamps
              </a>
              <a 
                href="#" 
                className="text-indigo-600 hover:text-indigo-800 px-3 py-2 text-md font-medium transition-all duration-300 ease-in-out relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                SciFi
              </a>
            </div>

            {/* Lab Solutions Button */}
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-md text-md transition-all duration-300 ease-in-out transform hover:translate-y-px">
              Lab Solutions
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden mt-2">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-600 hover:text-indigo-800 transition-colors duration-300 ease-in-out"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <Menu size={25} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile side drawer with overlay */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
        
        {/* Side drawer */}
        <div 
          className={`side-drawer fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-600 hover:text-indigo-800 transition-colors duration-300 ease-in-out"
            >
              <span className="sr-only">Close menu</span>
              <X size={25} />
            </button>
          </div>
          
          <div className="px-4 pt-2 pb-6 space-y-4">
            <a href="#" className="block text-indigo-600 hover:text-indigo-800 px-3 py-3 rounded-md text-lg font-medium transition-colors duration-300 ease-in-out border-b border-gray-100">
              Clubs
            </a>
            <a href="#" className="block text-indigo-600 hover:text-indigo-800 px-3 py-3 rounded-md text-lg font-medium transition-colors duration-300 ease-in-out border-b border-gray-100">
              Sports
            </a>
            <a href="#" className="block text-indigo-600 hover:text-indigo-800 px-3 py-3 rounded-md text-lg font-medium transition-colors duration-300 ease-in-out border-b border-gray-100">
              Bootcamps
            </a>
            <a href="#" className="block text-indigo-600 hover:text-indigo-800 px-3 py-3 rounded-md text-lg font-medium transition-colors duration-300 ease-in-out border-b border-gray-100">
              SciFi
            </a>
            <div className="pt-4">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-3 rounded-md text-lg transition-all duration-300 ease-in-out">
                Lab Solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;