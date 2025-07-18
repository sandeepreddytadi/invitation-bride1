import React, { useState } from "react";
import { Menu, X, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm border-b border-yellow-400">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-red-500 fill-current" />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400">
              S & R
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-white hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              About
            </a>
            <a
              href="#gallery"
              className="text-white hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
              onClick={() => scrollToSection("gallery")}
            >
              Gallery
            </a>
            <a
              href="#countdown"
              className="text-white hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
              onClick={() => scrollToSection("countdown")}
            >
              Countdown
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-yellow-400 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-yellow-400">
            <div className="flex flex-col space-y-4 mt-4">
              <a
                href="#home"
                className="text-white hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
                onClick={() => scrollToSection("home")}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                About
              </a>
              <a
                href="#gallery"
                className="text-white hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
                onClick={() => scrollToSection("gallery")}
              >
                Gallery
              </a>
              <a
                href="#countdown"
                className="text-white hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
                onClick={() => scrollToSection("countdown")}
              >
                Countdown
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;