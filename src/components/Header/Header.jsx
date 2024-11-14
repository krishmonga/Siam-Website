import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle button clicks (wait for 0.5 seconds before redirecting)
  const handleButtonClick = (route) => {
    setTimeout(() => {
      navigate(route); // Redirect after 1 seconds
    }, 1000); // 1 second delay
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 shadow-md transition-all duration-300 py-4">
      <nav className="px-4 mx-auto max-w-screen-xl flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img
            src="Logo.png"
            alt="SIAM Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Expanded Navigation Links */}
        <div className="hidden lg:flex flex-grow justify-center space-x-12 items-center py-2">
          <ul className="flex space-x-12 font-sans text-base w-full justify-center">
            <li>
              <NavLink
                to="/"
                onClick={() => handleButtonClick('/')} // Trigger redirect after 0.5s
                className={({ isActive }) => `text-gray-300 px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'text-orange-500 font-medium transform scale-105' : 'hover:text-orange-500'}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => handleButtonClick('/about')} // Trigger redirect after 0.5s
                className={({ isActive }) => `text-gray-300 px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'text-orange-500 font-medium transform scale-105' : 'hover:text-orange-500'}`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => handleButtonClick('/contact')} // Trigger redirect after 0.5s
                className={({ isActive }) => `text-gray-300 px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'text-orange-500 font-medium transform scale-105' : 'hover:text-orange-500'}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle Button (Visible on small screens) */}
        <div className="lg:hidden flex items-start">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-orange-500 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`h-8 w-8 transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : 'rotate-0'}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Slide-Down Animation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} bg-black bg-opacity-90 shadow-md absolute top-full left-0 right-0 py-4`}
      >
        <ul className="flex flex-col items-center space-y-5 font-sans text-base text-gray-300">
          <li>
            <NavLink
              to="/"
              onClick={() => handleButtonClick('/')} // Trigger redirect after 0.5s
              className="px-6 py-3 rounded-lg hover:text-orange-500 transition-all duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => handleButtonClick('/about')} // Trigger redirect after 0.5s
              className="px-6 py-3 rounded-lg hover:text-orange-500 transition-all duration-300"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => handleButtonClick('/contact')} // Trigger redirect after 0.5s
              className="px-6 py-3 rounded-lg hover:text-orange-500 transition-all duration-300"
            >
              Contact
            </NavLink>
          </li>
         </ul>
      </div>
    </header>
  );
};

export default Header;
