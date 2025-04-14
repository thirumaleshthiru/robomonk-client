import React from 'react';
import { School, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import logoImage from '/src/assets/homepage/logo.png';
import k12Image from '/src/assets/homepage/k12.jpg';
import graduatesImage from '/src/assets/homepage/graduates.jpeg';
import industryImage from '/src/assets/homepage/industry.jpg';

function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-gray-800">
      {/* Header Logo Section - Responsive sizing */}
      <div className="w-full py-6 md:py-8 flex justify-center">
        <div className="flex flex-col items-center px-4">
          {/* Responsive logo image */}
          <img src={logoImage} alt="RoboMonk Logo" className="w-[100%] md:w-[40%] h-auto object-contain" />
          <div className="text-white tracking-widest text-xs md:text-sm font-medium bg-indigo-800 bg-opacity-40 px-4 md:px-6 py-1 md:py-2 rounded-full mt-2 md:mt-3">
            LEARN • INVENT • DISCOVER
          </div>
        </div>
      </div>

      {/* Main Content - Added responsive padding */}
      <div className="w-full max-w-6xl px-4 md:px-6 py-8 md:py-16">
        {/* Title Section - Responsive text sizes */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-indigo-700">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Innovate. Learn. Lead.
            </span> 
            <span className="inline-block ml-1 md:ml-2 animate-bounce">🚀</span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-600 max-w-3xl mx-auto px-2">
            Bridging Education & Industry with Robotics, AI, and Industry 4.0 Solutions
          </p>
        </div>

        {/* Main Sections with cards - Improved mobile layout */}
        <div className="grid grid-cols-1 gap-8 md:gap-16 mb-10 md:mb-16">
          {/* For Schools */}
          <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row h-full">
              {/* Image area - Better mobile sizing */}
              <div className="w-full md:w-2/5 h-48 sm:h-56 md:h-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-200 opacity-20"></div>
                <div className="h-full flex items-center justify-center">
                  <img src={k12Image} alt="K-12 Education" className="w-full h-full object-cover md:object-contain" />
                </div>
              </div>
              
              {/* Content area with flex layout to push button to bottom */}
              <div className="w-full md:w-3/5 p-5 md:p-8 flex flex-col h-full">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="bg-indigo-600 p-2 md:p-3 rounded-lg md:rounded-xl text-white shadow">
                    <School size={24} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-indigo-800 ml-3 md:ml-4">For Schools (Grades 4 - 12)</h2>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700 mb-5 md:mb-8 text-base md:text-lg">
                    <span className="inline-block text-indigo-600 mr-2">➤</span> 
                    <strong>Future-Ready STEM, AI & Robotics Labs for Schools</strong> 
                  </p>
                </div>
                {/* Button pushed to bottom */}
                <div className="mt-auto">
                  <button className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white w-full md:w-auto px-4 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl flex items-center justify-center md:justify-start hover:shadow-lg transition-all">
                    <span>Explore K-12 Programs</span>
                    <ChevronRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* For College Students */}
          <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row h-full">
              {/* Image area - Better mobile sizing */}
              <div className="w-full md:w-2/5 h-48 sm:h-56 md:h-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-200 opacity-20"></div>
                <div className="h-full flex items-center justify-center">
                  <img src={graduatesImage} alt="College Students" className="w-full h-full object-cover md:object-contain" />
                </div>
              </div>
              
              {/* Content area with flex layout to push button to bottom */}
              <div className="w-full md:w-3/5 p-5 md:p-8 flex flex-col h-full">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="bg-indigo-600 p-2 md:p-3 rounded-lg md:rounded-xl text-white shadow">
                    <GraduationCap size={24} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-indigo-800 ml-3 md:ml-4">For College Students (B.Tech / M.Tech)</h2>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700 mb-5 md:mb-8 text-base md:text-lg">
                    <span className="inline-block text-indigo-600 mr-2">➤</span>
                    <strong>Industry-Aligned Training & Research Labs</strong>
                  </p>
                </div>
                {/* Button pushed to bottom */}
                <div className="mt-auto">
                  <button className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white w-full md:w-auto px-4 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl flex items-center justify-center md:justify-start hover:shadow-lg transition-all">
                    <span>Discover Engineering Programs</span>
                    <ChevronRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* For Industry */}
          <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row h-full">
              {/* Image area - Better mobile sizing */}
              <div className="w-full md:w-2/5 h-48 sm:h-56 md:h-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-200 opacity-20"></div>
                <div className="h-full flex items-center justify-center">
                  <img src={industryImage} alt="Industry Solutions" className="w-full h-full object-cover md:object-contain" />
                </div>
              </div>
              
              {/* Content area with flex layout to push button to bottom */}
              <div className="w-full md:w-3/5 p-5 md:p-8 flex flex-col h-full">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="bg-indigo-600 p-2 md:p-3 rounded-lg md:rounded-xl text-white shadow">
                    <Briefcase size={24} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-indigo-800 ml-3 md:ml-4">For Industry & Corporate Solutions</h2>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700 mb-5 md:mb-8 text-base md:text-lg">
                    <span className="inline-block text-indigo-600 mr-2">➤</span>
                    <strong>AI & Robotics Solutions for Smart Industries</strong>
                  </p>
                </div>
                {/* Button pushed to bottom */}
                <div className="mt-auto">
                  <button className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white w-full md:w-auto px-4 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl flex items-center justify-center md:justify-start hover:shadow-lg transition-all">
                    <span>Explore Industry 4.0 Solutions</span>
                    <ChevronRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Mobile friendly */}
        <div className="text-center bg-indigo-600 text-white text-xs md:text-sm py-3 md:py-4 rounded-full shadow-md">
          © ROBOMONK TECHNOLOGIES PVT LTD
        </div>
      </div>
    </div>
  );
}

export default Home;