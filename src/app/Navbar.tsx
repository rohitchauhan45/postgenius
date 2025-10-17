"use client";

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      try {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      } catch (error) {
        // Fallback for browsers that don't support smooth scrolling
        element.scrollIntoView();
      }
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav className="relative flex items-center justify-between px-4 sm:px-6 lg:px-18 py-4 bg-white shadow-sm">
      {/* Left side - Logo */}
      <div className="flex items-center">
        <h1
          className="text-xl sm:text-2xl font-bold text-purple-500 font-sans tracking-wide cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          Postgenious
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
        <a
          href="#home"
          className="text-gray-700 text-base lg:text-lg font-sans hover:text-purple-600 transition-colors cursor-pointer"
          onClick={(e) => handleClick(e, 'home')}
        >
          Home
        </a>
        <a
          href="#about"
          className="text-gray-700 text-base lg:text-lg font-sans hover:text-purple-600 transition-colors cursor-pointer"
          onClick={(e) => handleClick(e, 'about')}
        >
          About Us
        </a>
        <a
          href="#platforms"
          className="text-gray-700 text-base lg:text-lg font-sans hover:text-purple-600 transition-colors cursor-pointer"
          onClick={(e) => handleClick(e, 'platforms')}
        >
          Platforms
        </a>
        <a
          href="#contact"
          className="text-gray-700 text-base lg:text-lg font-sans hover:text-purple-600 transition-colors cursor-pointer"
          onClick={(e) => handleClick(e, 'contact')}
        >
          Contact Us
        </a>
        <a
          href="#how-it-works"
          className="text-gray-700 text-base lg:text-lg font-sans hover:text-purple-600 transition-colors cursor-pointer"
          onClick={(e) => handleClick(e, 'how-it-works')}
        >
          How It Works
        </a>
        
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-pink-600 text-white px-3 lg:px-4 py-2 rounded-md hover:bg-pink-700 transition-colors font-semibold text-sm lg:text-base">
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-purple-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Blur Background Overlay */}
          <div
            className="fixed inset-0 backdrop-blur-sm z-[9998] md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Mobile Menu */}
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t z-[9999] md:hidden">
            {/* Close Button */}
            <div className="flex justify-end p-4 pb-2">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-4 pb-4 space-y-4 text-center">
              <a
                href="#home"
                className="block text-gray-700 text-lg font-sans hover:text-purple-600 transition-colors cursor-pointer py-2"
                onClick={(e) => handleClick(e, 'home')}
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-gray-700 text-lg font-sans hover:text-purple-600 transition-colors cursor-pointer py-2"
                onClick={(e) => handleClick(e, 'about')}
              >
                About Us
              </a>
              <a
                href="#platforms"
                className="block text-gray-700 text-lg font-sans hover:text-purple-600 transition-colors cursor-pointer py-2"
                onClick={(e) => handleClick(e, 'platforms')}
              >
                Platforms
              </a>
              <a
                href="#contact"
                className="block text-gray-700 text-lg font-sans hover:text-purple-600 transition-colors cursor-pointer py-2"
                onClick={(e) => handleClick(e, 'contact')}
              >
                Contact Us
              </a>
              <a
                href="#how-it-works"
                className="block text-gray-700 text-lg font-sans hover:text-purple-600 transition-colors cursor-pointer py-2"
                onClick={(e) => handleClick(e, 'how-it-works')}
              >
                How It Works
              </a>

              <div className="pt-4 border-t">
                <button className="w-full bg-pink-600 text-white px-4 py-3 rounded-md hover:bg-pink-700 transition-colors font-semibold text-base">
                  Login
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
