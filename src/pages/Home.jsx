import React, { useEffect, useState } from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '/src/assets/homepage/logo.png';
import k12Image from '/src/assets/homepage/k12.jpg';
import graduatesImage from '/src/assets/homepage/graduates.jpeg';
import industryImage from '/src/assets/homepage/industry.jpg';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 text-gray-800">
      {/* Logo and Tagline Section */}
      <div className="w-full flex flex-col items-center py-6">
        <img src={logoImage} alt="RoboMonk Logo" className="w-full h-[28vh] object-contain" />

        {/* Animated Continuously Changing Gradient Tagline */}
        <h1
          className={`mt-4 text-2xl md:text-3xl font-bold bg-clip-text text-transparent animate-gradient-x transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{
            backgroundImage: 'linear-gradient(to right, #00ccff, #3366ff, #9933ff, #ff33cc, #33ccff, #00ccff)',
            backgroundSize: '400% 100%',
            animation: 'gradientFlow 8s linear infinite',
          }}
        >
          Innovate. Learn. Lead.
        </h1>

        {/* CSS for the continuous gradient animation */}
        <style jsx>{`
          @keyframes gradientFlow {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
          .animate-gradient-x {
            animation: gradientFlow 8s linear infinite;
          }

          .card-hover-effect:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }

          .button-hover-parent:hover .card-hover-effect {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
        `}</style>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl px-4 py-8">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* For Schools Card */}
          <div className="button-hover-parent">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 card-hover-effect">
              <div className="p-4">
                {/* Image container */}
                <div className="rounded-lg overflow-hidden mb-4">
                  <img
                    src={k12Image}
                    alt="K-12 Education"
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="text-center px-2">
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Future-Ready STEM, AI & Robotics Labs for Schools
                  </h2>

                  {/* Button with Link and cursor-pointer */}
                  <div className="mt-4 overflow-hidden relative group">
                    <Link to="/k12" className="block">
                      <button className="bg-blue-50 text-gray-700 w-full px-4 py-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-base font-medium relative z-10 overflow-hidden cursor-pointer">
                        <span className="relative z-10">Explore K-12 Programs</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* For College Students Card */}
          <div className="button-hover-parent">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 card-hover-effect">
              <div className="p-4">
                {/* Image container */}
                <div className="rounded-lg overflow-hidden mb-4">
                  <img
                    src={graduatesImage}
                    alt="College Students"
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="text-center px-2">
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Industry-Aligned Training & Research Labs
                  </h2>

                  {/* Button with Link and cursor-pointer */}
                  <div className="mt-4 overflow-hidden relative group">
                    <Link to="/graduates" className="block">
                      <button className="bg-blue-50 text-gray-700 w-full px-4 py-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-base font-medium relative z-10 overflow-hidden cursor-pointer">
                        <span className="relative z-10">Discover Engineering Programs</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* For Industry Card */}
          <div className="button-hover-parent">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 card-hover-effect">
              <div className="p-4">
                {/* Image container */}
                <div className="rounded-lg overflow-hidden mb-4">
                  <img
                    src={industryImage}
                    alt="Industry Solutions"
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="text-center px-2">
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    AI & Robotics Solutions for Smart Industries
                  </h2>

                  {/* Button with Link and cursor-pointer */}
                  <div className="mt-4 overflow-hidden relative group">
                    <Link to="/industry" className="block">
                      <button className="bg-blue-50 text-gray-700 w-full px-4 py-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-base font-medium relative z-10 overflow-hidden cursor-pointer">
                        <span className="relative z-10">Explore Industry 4.0 Solutions</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>

        {/* Social Media Icons with hover effect */}
        <div className="flex justify-center space-x-8 mb-4">
          <a
            href="#"
            className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white group"
          >
            <Instagram size={24} className="text-gray-700 group-hover:text-white transition-colors" />
          </a>
          <a
            href="#"
            className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-white group"
          >
            <MessageCircle size={24} className="text-gray-700 group-hover:text-white transition-colors" />
          </a>
          <a
            href="#"
            className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-400 hover:text-white group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-700 group-hover:text-white transition-colors"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
          </a>
          <a
            href="#"
            className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 hover:text-white group"
          >
            <Linkedin size={24} className="text-gray-700 group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm">
          © 2025 All rights reserved - RoboMonk Technologies Pvt Ltd
        </div>
      </div>
    </div>
  );
}

export default Home;