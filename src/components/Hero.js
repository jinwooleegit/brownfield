import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: `url('/images/SnapInsta.to_486756223_18048158288348183_299248871075608507_n.jpg')`,
        }}
      >
        {/* Animated Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-brown-900/60 to-coffee-900/70"></div>
      </div>

      {/* Floating Coffee Beans Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-coffee-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-coffee-300 rounded-full opacity-30 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-coffee-500 rounded-full opacity-15 animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-coffee-200 rounded-full opacity-25 animate-float"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 text-center text-white section-padding">
        <div className="container-max">
          {/* Main Content */}
          <div className="max-w-5xl mx-auto">
            {/* Logo with Enhanced Design */}
            <div className="flex justify-center mb-12 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-coffee-400 to-coffee-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-150"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl group-hover:scale-110 transition-all duration-500">
                  <img 
                    src="/images/brownfield-logo.jpg"
                    alt="Brownfield Roasters Logo"
                    className="h-20 w-auto object-contain shadow-lg"
                  />
                </div>
                <div className="absolute -inset-6 bg-gradient-to-r from-coffee-400/20 via-transparent to-coffee-600/20 rounded-2xl animate-pulse"></div>
              </div>
            </div>
            
            {/* Enhanced Title */}
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-bold font-serif mb-4 leading-tight">
                <span className="bg-gradient-to-r from-white via-coffee-100 to-coffee-200 bg-clip-text text-transparent animate-gradient-x">
                  Brownfield
                </span>
                <span className="block bg-gradient-to-r from-coffee-200 via-coffee-300 to-coffee-400 bg-clip-text text-transparent animate-gradient-x-delayed">
                  Roasters
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-coffee-400 to-coffee-600 mx-auto rounded-full shadow-lg"></div>
            </div>
            
            {/* Enhanced Description */}
            <div className="mb-16 space-y-6">
              <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
                <p className="text-xl md:text-2xl mb-4 text-coffee-100 leading-relaxed font-light">
                  사람들은 모두 각자의 매개체로 삶을 영위하며,
                </p>
                <p className="text-xl md:text-2xl mb-4 text-coffee-100 leading-relaxed font-light">
                  그중 우리는 <span className="font-bold text-coffee-200 bg-coffee-600/20 px-3 py-1 rounded-lg">커피라는 갈색의 매개체</span>를 통해
                </p>
                <p className="text-xl md:text-2xl text-coffee-100 leading-relaxed font-light">
                  교류하고 소통합니다 <span className="text-2xl animate-bounce inline-block">☕</span>
                </p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <button
                onClick={() => scrollToSection('menu')}
                className="group relative bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white px-10 py-5 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border border-coffee-500"
              >
                <span className="relative z-10">메뉴 보기</span>
                <div className="absolute inset-0 bg-gradient-to-r from-coffee-400 to-coffee-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="group relative bg-transparent border-2 border-coffee-200 text-coffee-200 hover:bg-coffee-200 hover:text-brown-800 px-10 py-5 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="relative z-10">더 알아보기</span>
                <div className="absolute inset-0 bg-coffee-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Enhanced Business Hours */}
            <div className="bg-gradient-to-br from-black/40 to-brown-900/40 backdrop-blur-lg rounded-3xl p-10 max-w-md mx-auto border border-white/10 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-coffee-400 to-coffee-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-coffee-200 text-center">영업시간</h3>
              <div className="text-lg text-coffee-100 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Open:</span>
                  <span className="font-bold text-coffee-200">12:00</span>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-coffee-400 to-transparent"></div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Close:</span>
                  <span className="font-bold text-coffee-200">19:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('about')}
          className="group text-coffee-200 hover:text-white transition-all duration-300 animate-bounce"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero; 