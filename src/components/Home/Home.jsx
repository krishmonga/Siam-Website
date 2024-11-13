import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FlipWords } from '../ui/flip-words'; // Adjust path if necessary
import img1 from './img1.jpg'; // Import background image

export default function Home() {
  const [loading, setLoading] = useState(false);  // Track loading state
  const synonyms = ["Creativity", "Advancement", "Progress", "Innovation", "Vision", "Imagination", "Exploration", "Transformation"];
  const navigate = useNavigate();  // Hook to navigate to different pages

  const handleExploreClick = () => {
    setLoading(true);  // Start loading animation

    // Simulate loading animation with setTimeout
    setTimeout(() => {
      setLoading(false);  // Stop loading after animation
      navigate('/about');  // Navigate to About page after animation
    }, 3000);  // Duration of loading animation
  };

  return (
    <div 
      className="fixed inset-0 bg-cover bg-center flex flex-col items-center justify-center font-sans"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Main Content with Expanded Black Box and Entrance Animation */}
      <div className="text-center max-w-5xl p-8 rounded-lg bg-black bg-opacity-40 space-y-4 fade-in-up">
        <h1 className="text-white text-3xl sm:text-4xl font-bold font-serif mb-4">
          SOCIETY FOR INDUSTRIAL AND APPLIED MATHEMATICS
        </h1>
        <div className="flex flex-col items-center">
          <span className="text-white italic text-lg sm:text-2xl font-medium mb-2">
            <FlipWords words={synonyms} duration={3000} />
          </span>
          <span className="text-white text-md sm:text-lg font-light">
            through Research
          </span>
        </div>

        {/* Stylish Transparent Button with Text Color Change on Hover */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleExploreClick}
            className="relative text-white border-2 border-white py-2 px-8 rounded-full text-lg font-semibold overflow-hidden transition-all duration-1100 ease-in-out hover:text-black focus:outline-none group"
          >
            <span className="relative z-10">Explore</span>
            <span className="absolute inset-0 bg-gradient-to-br from-white to-transparent transform -translate-x-full translate-y-full transition-transform duration-1100 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
          </button>
        </div>
      </div>

      {/* Loading Animation (Overlay with Loading Spinner) */}
      {loading && (
        <div className="blur-overlay">
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center py-4 bg-black bg-opacity-80">
        <p className="text-sm sm:text-md font-light text-white">
          © 2024 SIAM @ JUIT. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
