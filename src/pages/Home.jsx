import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import logoImage from '/src/assets/homepage/logo.png';
import k12Image from '/src/assets/homepage/k12.jpg';
import graduatesImage from '/src/assets/homepage/graduates.jpeg';
import industryImage from '/src/assets/homepage/industry.jpg';

function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 text-gray-800">
    
            <img src={logoImage} alt="RoboMonk Logo" className="w-[100%] md:w-[40%] h-auto object-contain" />
          
     

      {/* Main Content */}
      <div className="w-full max-w-6xl px-4 py-8 md:py-12">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          {/* For Schools Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
            <div className="p-3 md:p-4">
              {/* Image container */}
              <div className="h-40 md:h-48 rounded-lg overflow-hidden mb-4">
                <img src={k12Image} alt="K-12 Education" className="w-full h-full object-cover" />
              </div>
              
              {/* Content */}
              <div className="text-center px-2">
                <h2 className="text-base md:text-lg font-bold text-indigo-800 mb-4">
                  Future-Ready STEM, AI & Robotics Labs for Schools
                </h2>
                
                {/* Button */}
                <div className="mt-2 md:mt-4">
                  <button className="bg-blue-50 text-indigo-600 w-full px-3 py-2 md:py-3 rounded-lg border border-blue-100 hover:bg-blue-100 transition-all text-sm md:text-base font-medium">
                    Explore K-12 Programs
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* For College Students Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
            <div className="p-3 md:p-4">
              {/* Image container */}
              <div className="h-40 md:h-48 rounded-lg overflow-hidden mb-4">
                <img src={graduatesImage} alt="College Students" className="w-full h-full object-cover" />
              </div>
              
              {/* Content */}
              <div className="text-center px-2">
                <h2 className="text-base md:text-lg font-bold text-indigo-800 mb-4">
                  Industry-Aligned Training & Research Labs
                </h2>
                
                {/* Button */}
                <div className="mt-2 md:mt-4">
                  <button className="bg-blue-50 text-indigo-600 w-full px-3 py-2 md:py-3 rounded-lg border border-blue-100 hover:bg-blue-100 transition-all text-sm md:text-base font-medium">
                    Discover Engineering Programs
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* For Industry Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
            <div className="p-3 md:p-4">
              {/* Image container */}
              <div className="h-40 md:h-48 rounded-lg overflow-hidden mb-4">
                <img src={industryImage} alt="Industry Solutions" className="w-full h-full object-cover" />
              </div>
              
              {/* Content */}
              <div className="text-center px-2">
                <h2 className="text-base md:text-lg font-bold text-indigo-800 mb-4">
                  AI & Robotics Solutions for Smart Industries
                </h2>
                
                {/* Button */}
                <div className="mt-2 md:mt-4">
                  <button className="bg-blue-50 text-indigo-600 w-full px-3 py-2 md:py-3 rounded-lg border border-blue-100 hover:bg-blue-100 transition-all text-sm md:text-base font-medium">
                    Explore Industry 4.0 Solutions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
            <Instagram size={20} className="text-gray-700" />
          </a>
          <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
            <MessageCircle size={20} className="text-gray-700" />
          </a>
          <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
          </a>
          <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
            <Linkedin size={20} className="text-gray-700" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-xs md:text-sm">
          © 2025 All rights reserved - RoboMonk Technologies Pvt Ltd
        </div>
      </div>
    </div>
  );
}

export default Home;