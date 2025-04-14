import React from 'react';
import { School, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';

function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-indigo-50 to-white text-gray-800">
      {/* Header Logo Section */}
      <div className="w-full bg-white py-6 flex justify-center border-b border-indigo-100">
        <div className="flex flex-col items-center">
          <img src="/src/assets/homepage/logo.png" alt="RoboMonk Logo" className="w-full h-50 object-contain" />
          <div className="text-indigo-600 tracking-widest mt-2 text-sm font-medium">
            LEARN • INVENT • DISCOVER
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-indigo-700">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Innovate. Learn. Lead.
            </span> 
            <span className="animate-pulse">🚀</span>
          </h1>
          <p className="text-xl text-indigo-600">
            Bridging Education & Industry with Robotics, AI, and Industry 4.0 Solutions
          </p>
        </div>

        {/* Main Sections with cards alongside content */}
        <div className="grid grid-cols-1 gap-12 mb-16">
          {/* For Schools */}
          <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden border border-indigo-100 hover:shadow-xl transition-shadow duration-300">
            {/* Image area */}
            <div className="w-full md:w-1/3 bg-indigo-50">
              <img src="/src/assets/homepage/k12.jpg" alt="K-12 Education" className="w-full h-full object-cover" />
            </div>
            
            {/* Content area */}
            <div className="w-full md:w-2/3 bg-white p-8">
              <div className="flex items-center mb-4">
                <School className="text-indigo-600 mr-3" size={28} />
                <h2 className="text-xl font-bold text-indigo-800">For Schools (Grades 4 - 12)</h2>
              </div>
              <div className="mb-6">
                <p className="text-gray-700 mb-6">
                  <span className="inline-block transform hover:translate-x-1 transition-transform">👉</span> <strong>Future-Ready STEM, AI & Robotics Labs for Schools</strong> 
                </p>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-md flex items-center hover:bg-indigo-700 transition-colors group">
                  <span>Explore K-12 Programs</span>
                  <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* For College Students */}
          <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden border border-indigo-100 hover:shadow-xl transition-shadow duration-300">
            {/* Image area */}
            <div className="w-full md:w-1/3 bg-indigo-50">
              <img src="/src/assets/homepage/graduates.jpeg" alt="College Students" className="w-full h-full object-cover" />
            </div>
            
            {/* Content area */}
            <div className="w-full md:w-2/3 bg-white p-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-indigo-600 mr-3" size={28} />
                <h2 className="text-xl font-bold text-indigo-800">For College Students (B.Tech / M.Tech)</h2>
              </div>
              <div className="mb-6">
                <p className="text-gray-700 mb-6">
                  <span className="inline-block transform hover:translate-x-1 transition-transform">👉</span> <strong>Industry-Aligned Training & Research Labs</strong>
                </p>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-md flex items-center hover:bg-indigo-700 transition-colors group">
                  <span>Discover Engineering Programs</span>
                  <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* For Industry */}
          <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden border border-indigo-100 hover:shadow-xl transition-shadow duration-300">
            {/* Image area */}
            <div className="w-full md:w-1/3 bg-indigo-50">
              <img src="/src/assets/homepage/industry.jpg" alt="Industry Solutions" className="w-full h-full object-cover" />
            </div>
            
            {/* Content area */}
            <div className="w-full md:w-2/3 bg-white p-8">
              <div className="flex items-center mb-4">
                <Briefcase className="text-indigo-600 mr-3" size={28} />
                <h2 className="text-xl font-bold text-indigo-800">For Industry & Corporate Solutions</h2>
              </div>
              <div className="mb-6">
                <p className="text-gray-700 mb-6">
                  <span className="inline-block transform hover:translate-x-1 transition-transform">👉</span> <strong>AI & Robotics Solutions for Smart Industries</strong>
                </p>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-md flex items-center hover:bg-indigo-700 transition-colors group">
                  <span>Explore Industry 4.0 Solutions</span>
                  <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-indigo-600 text-sm py-4">
          © ROBOMONK TECHNOLOGIES PVT LTD
        </div>
      </div>
    </div>
  );
}

export default Home;