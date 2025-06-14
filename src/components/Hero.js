import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/SnapInsta.to_486756223_18048158288348183_299248871075608507_n.jpg')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 text-center text-white section-padding">
        <div className="container-max">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8 leading-tight">
              Brownfield
              <span className="block text-coffee-200">Roasters</span>
            </h1>
            
            <div className="mb-12">
              <p className="text-xl md:text-2xl mb-6 text-coffee-100 leading-relaxed">
                사람들은 모두 각자의 매개체로 삶을 영위하며,
              </p>
              <p className="text-xl md:text-2xl mb-8 text-coffee-100 leading-relaxed">
                그중 우리는 <span className="font-semibold text-coffee-200">커피라는 갈색의 매개체</span>를 통해
              </p>
              <p className="text-xl md:text-2xl text-coffee-100 leading-relaxed">
                교류하고 소통합니다 ☕
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={() => scrollToSection('menu')}
                className="btn-primary bg-coffee-600 hover:bg-coffee-700 text-white px-8 py-4 text-lg"
              >
                메뉴 보기
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="btn-secondary border-coffee-200 text-coffee-200 hover:bg-coffee-200 hover:text-brown-800 px-8 py-4 text-lg"
              >
                더 알아보기
              </button>
            </div>

            {/* Business Hours */}
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-coffee-200">영업시간</h3>
              <div className="text-lg text-coffee-100">
                <p className="mb-2">
                  <span className="font-medium">Open:</span> 12:00
                </p>
                <p>
                  <span className="font-medium">Close:</span> 19:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-coffee-200 hover:text-white transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero; 