import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-coffee-50 via-white to-brown-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-coffee-200/10 to-coffee-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-brown-200/10 to-brown-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-coffee-300/5 to-coffee-500/5 rounded-full blur-2xl"></div>
      </div>

      {/* Floating Coffee Bean Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-3 h-3 bg-coffee-400/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-64 right-32 w-2 h-2 bg-coffee-300/30 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-48 left-32 w-4 h-4 bg-coffee-500/15 rounded-full animate-float"></div>
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-max">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <span className="text-coffee-600 font-medium text-lg tracking-wider uppercase mb-4 block">About Us</span>
              <h2 className="text-5xl md:text-7xl font-bold font-serif text-brown-800 mb-6 relative">
                우리의 이야기
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-coffee-400 to-coffee-600 rounded-full"></div>
              </h2>
              <p className="text-xl text-brown-600 max-w-2xl mx-auto leading-relaxed">
                커피를 통해 사람들을 연결하는 특별한 공간
              </p>
            </div>
          </div>

          {/* Main Content with Integrated Images */}
          <div className="max-w-6xl mx-auto">
            {/* First Story Card with Side Image */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-coffee-400 to-coffee-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brown-800 mb-3">거제도에서 시작된 여정</h3>
                    <p className="text-lg text-brown-700 leading-relaxed">
                      Brownfield Roasters는 거제도의 아름다운 자연 속에서 시작된 스페셜티 커피 로스터리입니다. 
                      우리는 커피가 단순한 음료를 넘어서 사람들을 연결하는 특별한 매개체라고 믿습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Side Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-coffee-400/20 to-coffee-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-3 border border-white/30">
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src="/images/SnapInsta.to_497679542_18052712129348183_413711426659425542_n.jpg"
                      alt="Brownfield Roasters Coffee"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery Row */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-coffee-300/20 to-coffee-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-white/20 backdrop-blur-sm rounded-xl p-2 border border-white/30">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/images/SnapInsta.to_504064724_18054766886348183_2054420973040220017_n.jpg"
                      alt="Coffee Beans"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brown-300/20 to-brown-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-white/20 backdrop-blur-sm rounded-xl p-2 border border-white/30">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/images/SnapInsta.to_491493590_18050212685348183_2714887865526726211_n.jpg"
                      alt="Coffee Making"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-coffee-400/20 to-coffee-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-white/20 backdrop-blur-sm rounded-xl p-2 border border-white/30">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/images/SnapInsta.to_505405965_18055363589348183_4101129269674964028_n.jpg"
                      alt="Coffee Shop Interior"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Story Card with Opposite Layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Image First on Desktop */}
              <div className="relative group lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-brown-400/20 to-brown-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-3 border border-white/30">
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src="/images/SnapInsta.to_486756223_18048158288348183_299248871075608507_n.jpg"
                      alt="Coffee Shop Atmosphere"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 lg:order-2">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brown-400 to-brown-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brown-800 mb-3">소통과 연결의 공간</h3>
                    <p className="text-lg text-brown-700 leading-relaxed">
                      각자의 삶을 살아가는 사람들이 커피라는 갈색의 매개체를 통해 만나고, 
                      소통하며, 새로운 관계를 형성해 나가는 따뜻한 공간을 만들어갑니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Story Card Centered */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-coffee-500 to-coffee-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brown-800 mb-3">정성과 사랑이 담긴 한 잔</h3>
                    <p className="text-lg text-brown-700 leading-relaxed">
                      신선하게 로스팅된 원두와 정성스럽게 내린 커피 한 잔으로 
                      여러분의 일상에 작은 행복과 따뜻한 소통의 순간을 선사합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Features Grid */}
            <div className="mt-20">
              <h3 className="text-3xl font-bold text-brown-800 mb-12 text-center">우리가 제공하는 특별함</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group bg-gradient-to-br from-coffee-100/50 to-coffee-200/30 backdrop-blur-sm rounded-xl p-8 border border-coffee-200/30 hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-coffee-500 to-coffee-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-brown-800 mb-3 text-xl">스페셜티 커피</h4>
                  <p className="text-brown-600 text-lg leading-relaxed">엄선된 원두를 직접 로스팅하여 최상의 맛을 제공합니다. 각 원두의 고유한 특성을 살려 완벽한 한 잔을 만들어냅니다.</p>
                </div>

                <div className="group bg-gradient-to-br from-brown-100/50 to-brown-200/30 backdrop-blur-sm rounded-xl p-8 border border-brown-200/30 hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-brown-500 to-brown-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-brown-800 mb-3 text-xl">원두 납품</h4>
                  <p className="text-brown-600 text-lg leading-relaxed">카페나 사업장에 신선한 원두를 공급해드립니다. 안정적인 품질과 맞춤형 로스팅으로 파트너의 성공을 함께합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 