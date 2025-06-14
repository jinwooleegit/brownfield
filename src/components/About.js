import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-coffee-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-brown-800 mb-8">
              우리의 이야기
            </h2>
            
            <div className="space-y-6 text-lg text-brown-700 leading-relaxed">
              <p>
                Brownfield Roasters는 거제도에서 시작된 스페셜티 커피 로스터리입니다. 
                우리는 커피가 단순한 음료를 넘어서 사람들을 연결하는 특별한 매개체라고 믿습니다.
              </p>
              
              <p>
                각자의 삶을 살아가는 사람들이 커피라는 갈색의 매개체를 통해 만나고, 
                소통하며, 새로운 관계를 형성해 나가는 공간을 만들고자 합니다.
              </p>
              
              <p>
                신선하게 로스팅된 원두와 정성스럽게 내린 커피 한 잔으로 
                여러분의 일상에 작은 행복과 따뜻한 소통의 순간을 선사하겠습니다.
              </p>
            </div>

            {/* Features */}
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brown-700 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brown-800 mb-2">스페셜티 커피</h3>
                  <p className="text-brown-600">엄선된 원두를 직접 로스팅하여 최상의 맛을 제공합니다.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brown-700 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brown-800 mb-2">소통의 공간</h3>
                  <p className="text-brown-600">편안하고 따뜻한 분위기에서 사람들과의 만남을 즐기세요.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brown-700 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brown-800 mb-2">원두 납품</h3>
                  <p className="text-brown-600">카페나 사업장에 신선한 원두를 공급해드립니다.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brown-700 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brown-800 mb-2">정성과 사랑</h3>
                  <p className="text-brown-600">모든 커피에 정성과 사랑을 담아 정성스럽게 준비합니다.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-brown-200 to-brown-300 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center text-brown-800">
                <div className="text-8xl mb-4">☕</div>
                <h3 className="text-2xl font-serif font-bold mb-2">Brownfield Roasters</h3>
                <p className="text-lg">거제도의 특별한 커피 경험</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-coffee-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brown-400 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 