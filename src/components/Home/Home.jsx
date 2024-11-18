import React, { useState } from 'react';
import { FlipWords } from '../ui/flip-words'; // Adjust path if necessary

export default function Home() {
  const synonyms = ["Creativity", "Advancement", "Progress", "Innovation", "Vision", "Imagination", "Exploration", "Transformation"];

  // Ref to handle scrolling to the next section
  const nextSectionRef = React.useRef(null);

  const handleExploreClick = () => {
    // Smooth scroll to the next section
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Main Content with Expanded Black Box and Entrance Animation */}
      <div className="min-h-screen flex flex-col items-center justify-center font-sans text-center bg-black text-white">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif mb-4">
          SOCIETY FOR INDUSTRIAL AND APPLIED MATHEMATICS
        </h1>
        <div className="flex flex-col items-center">
          <span className="italic text-lg sm:text-2xl font-medium mb-2">
            <FlipWords words={synonyms} duration={3000} />
          </span>
          <span className="text-md sm:text-lg font-light">
            through Research
          </span>
        </div>

        <div className="h-15rem"></div>

        {/* Explore Button */}
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

      {/* Dummy Content Section for Scrolling */}
      <div ref={nextSectionRef} className="min-h-screen flex items-center justify-center bg-black text-white text-center p-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to the Next Section</h2>
        <p className="text-lg sm:text-xl font-light">
          This is some placeholder content that will appear once you scroll down. 
          You can add any content you like here for further sections.
        </p>
      </div>

      {/* Footer */}
      <footer className="relative w-full text-center py-4 bg-black bg-opacity-80">
        <p className="text-sm sm:text-md font-light text-white">
          © 2024 SIAM @ JUIT. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
