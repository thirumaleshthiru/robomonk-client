import React, { useState, useEffect, useRef } from 'react';

// Import all images
import aiImage from '../assets/ai.png';
import mathematicsImage from '../assets/mathematics.png';
import mechanicsImage from '../assets/mechanics.png';
import roboticsImage from '../assets/Robotics.png';
import chessImage from '../assets/Chess.png';
import arvrImage from '../assets/ARVR.png';
import codingImage from '../assets/coding.png';
import artImage from '../assets/art.png';

const careers = [
  { 
    text: 'AI', 
    image: aiImage,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    accentColor: 'border-indigo-400'
  },
  { 
    text: 'Mathematics', 
    image: mathematicsImage,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    accentColor: 'border-emerald-400'
  },
  { 
    text: 'Mechanics', 
    image: mechanicsImage,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    accentColor: 'border-amber-400'
  },
  { 
    text: 'Robotics', 
    image: roboticsImage,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
    accentColor: 'border-pink-400'
  },
  { 
    text: 'Chess', 
    image: chessImage,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    accentColor: 'border-blue-400'
  },
  { 
    text: 'AR/VR', 
    image: arvrImage,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    accentColor: 'border-purple-400'
  },
  { 
    text: 'Coding', 
    image: codingImage,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
    accentColor: 'border-cyan-400'
  },
  { 
    text: 'Art', 
    image: artImage,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
    accentColor: 'border-rose-400'
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const dotsRef = useRef(null);
  const currentCareer = careers[currentIndex];

  // Manually change career on dot click
  const handleDotClick = (index) => {
    if (index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Auto-rotate careers
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % careers.length);
        setIsTransitioning(false);
      }, 300);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Scroll active dot into view
  useEffect(() => {
    if (dotsRef.current) {
      const activeDot = dotsRef.current.children[currentIndex];
      if (activeDot) {
        activeDot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentIndex]);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 w-full py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Career Navigation Bar */}
        <div className="w-full mb-8 overflow-x-auto no-scrollbar">
          <div 
            ref={dotsRef}
            className="flex space-x-2 md:space-x-4 justify-start md:justify-center min-w-max py-2"
          >
            {careers.map((career, index) => (
              <button
                key={career.text}
                onClick={() => handleDotClick(index)}
                className={`flex items-center px-3 py-2 rounded-full transition-all duration-300 
                ${index === currentIndex 
                  ? `${career.bgColor} ${career.color} font-semibold shadow-md` 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                <span className="text-sm whitespace-nowrap">{career.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Column */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Shape your child's future
            </h2>
            <h1 className={`text-4xl md:text-5xl font-extrabold mb-6 transition-colors duration-300 ${currentCareer.color}`}>
              in {currentCareer.text}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Give your child the competitive edge they need in today's rapidly evolving world with our specialized programs.
            </p>
             
          </div>

          {/* Image Column with 3D Card Effect */}
          <div className="order-1 md:order-2 perspective-1000">
            <div className={`relative h-64 md:h-96 w-full transform transition-all duration-500 
            ${isTransitioning ? 'opacity-0 rotate-y-90' : 'opacity-100 rotate-y-0'} 
            preserve-3d shadow-2xl rounded-2xl`}>
              {careers.map((career, index) => (
                <div 
                  key={career.text}
                  className={`absolute inset-0 backface-hidden ${
                    index === currentIndex ? 'z-10' : 'z-0'
                  }`}
                >
                  {/* Dynamic Background Pattern */}
                  <div className={`absolute inset-0 ${career.bgColor} bg-opacity-30 overflow-hidden rounded-2xl`}>
                    <div className="absolute inset-0 opacity-20">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div 
                          key={i}
                          className={`absolute ${career.accentColor} border-4 rounded-full transform -translate-x-1/2 -translate-y-1/2`}
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 100 + 50}px`,
                            height: `${Math.random() * 100 + 50}px`,
                            opacity: Math.random() * 0.5 + 0.1
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Glass Card Effect */}
                  <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl shadow-inner"></div>
                  
                  {/* Content Container */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Image */}
                      <img
                        src={career.image}
                        alt={career.text}
                        className="max-w-full max-h-full object-contain z-20 drop-shadow-xl transform transition-transform duration-700 hover:scale-105"
                      />
                      
                      {/* Floating Label */}
                      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3
                        ${career.bgColor} ${career.color} px-6 py-2 rounded-full font-bold text-lg
                        shadow-lg z-30`}>
                        {career.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats/Features Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: 'Expert Instructors', value: '20+' },
            { label: 'Students Enrolled', value: '1,000+' },
            { label: 'Success Rate', value: '95%' },
            { label: 'Interactive Courses', value: '50+' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;