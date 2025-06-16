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
      <div className="container-max px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col group">
              <h1 className={`text-2xl font-bold font-serif transition-all duration-300 ${
                isScrolled ? 'text-brown-800' : 'text-white drop-shadow-lg'
              } group-hover:scale-105`}>
                브라운필드
              </h1>
              <span className={`text-sm font-medium tracking-wider transition-all duration-300 ${
                isScrolled ? 'text-coffee-600' : 'text-coffee-200'
              }`}>
                ROASTERS
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors duration-300 hover:text-brown-600 px-2 py-1 ${
                isScrolled ? 'text-brown-700' : 'text-white'
              }`}
            >
              홈
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors duration-300 hover:text-brown-600 px-2 py-1 ${
                isScrolled ? 'text-brown-700' : 'text-white'
              }`}
            >
              소개
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className={`font-medium transition-colors duration-300 hover:text-brown-600 px-2 py-1 ${
                isScrolled ? 'text-brown-700' : 'text-white'
              }`}
            >
              메뉴
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className={`font-medium transition-colors duration-300 hover:text-brown-600 px-2 py-1 ${
                isScrolled ? 'text-brown-700' : 'text-white'
              }`}
            >
              원두
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className={`font-medium transition-colors duration-300 hover:text-brown-600 px-2 py-1 ${
                isScrolled ? 'text-brown-700' : 'text-white'
              }`}
            >
              갤러리
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-300 hover:text-brown-600 px-2 py-1 ${
                isScrolled ? 'text-brown-700' : 'text-white'
              }`}
            >
              연락처
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
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
          <div 
            id="mobile-menu"
            className="md:hidden bg-white border-t border-brown-100 mx-6 rounded-b-lg shadow-lg"
            role="navigation"
            aria-label="모바일 메뉴"
          >
            <nav className="py-6 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-6 py-3 text-brown-700 hover:bg-brown-50 transition-colors duration-200 focus:outline-none focus:bg-brown-50"
              >
                홈
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-6 py-3 text-brown-700 hover:bg-brown-50 transition-colors duration-200 focus:outline-none focus:bg-brown-50"
              >
                소개
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-6 py-3 text-brown-700 hover:bg-brown-50 transition-colors duration-200 focus:outline-none focus:bg-brown-50"
              >
                메뉴
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="block w-full text-left px-6 py-3 text-brown-700 hover:bg-brown-50 transition-colors duration-200 focus:outline-none focus:bg-brown-50"
              >
                원두
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left px-6 py-3 text-brown-700 hover:bg-brown-50 transition-colors duration-200 focus:outline-none focus:bg-brown-50"
              >
                갤러리
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-6 py-3 text-brown-700 hover:bg-brown-50 transition-colors duration-200 focus:outline-none focus:bg-brown-50"
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