import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/brownfiled-logo.jpg"
                alt="Brownfield Roasters Logo"
                className="h-10 w-10 object-contain rounded-full"
              />
              <h1 className={`text-2xl font-bold font-serif transition-colors duration-300 ${
                isScrolled ? 'text-brown-800' : 'text-white'
              }`}>
                Brownfield Roasters
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors duration-300 hover:text-brown-600 ${
                isScrolled ? 'text-brown-700' : 'text-white'
              }`}
            >
              홈
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors duration-300 hover:text-brown-600 ${
                isScrolled ? 'text-brown-700' : 'text-white'
              }`}
            >
              소개
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className={`font-medium transition-colors duration-300 hover:text-brown-600 ${
                isScrolled ? 'text-brown-700' : 'text-white'
              }`}
            >
              메뉴
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className={`font-medium transition-colors duration-300 hover:text-brown-600 ${
                isScrolled ? 'text-brown-700' : 'text-white'
              }`}
            >
              갤러리
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-300 hover:text-brown-600 ${
                isScrolled ? 'text-brown-700' : 'text-white'
              }`}
            >
              연락처
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 mb-1 transition-colors duration-300 ${
              isScrolled ? 'bg-brown-700' : 'bg-white'
            }`}></div>
            <div className={`w-6 h-0.5 mb-1 transition-colors duration-300 ${
              isScrolled ? 'bg-brown-700' : 'bg-white'
            }`}></div>
            <div className={`w-6 h-0.5 transition-colors duration-300 ${
              isScrolled ? 'bg-brown-700' : 'bg-white'
            }`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-brown-100">
            <nav className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-brown-700 hover:bg-brown-50"
              >
                홈
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-brown-700 hover:bg-brown-50"
              >
                소개
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-4 py-2 text-brown-700 hover:bg-brown-50"
              >
                메뉴
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left px-4 py-2 text-brown-700 hover:bg-brown-50"
              >
                갤러리
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-brown-700 hover:bg-brown-50"
              >
                연락처
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 