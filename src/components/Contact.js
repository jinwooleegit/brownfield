import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-coffee-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-brown-800 mb-6">
            찾아오시는 길
          </h2>
          <p className="text-xl text-brown-600 max-w-2xl mx-auto">
            거제도에서 특별한 커피 경험을 기다리고 있습니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brown-700 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brown-800 mb-2">주소</h3>
                  <p className="text-brown-600 text-lg">옥포대첩로 20, Geoje</p>
                  <p className="text-brown-500 text-sm mt-1">경상남도 거제시</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brown-700 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brown-800 mb-3">영업시간</h3>
                  <div className="space-y-2 text-brown-600">
                    <div className="flex justify-between items-center">
                      <span>매일</span>
                      <span className="font-medium">12:00 - 19:00</span>
                    </div>
                    <p className="text-sm text-brown-500 mt-3">
                      * 영업시간은 상황에 따라 변경될 수 있습니다
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brown-700 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brown-800 mb-3">연락처</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-brown-600 mb-1">원두 납품 문의</p>
                      <a 
                        href="mailto:bfield20@daum.net" 
                        className="inline-flex items-center space-x-2 text-brown-700 font-medium hover:text-brown-800 hover:underline transition-all duration-200 bg-brown-50 hover:bg-brown-100 px-3 py-2 rounded-lg border border-brown-200 hover:border-brown-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>bfield20@daum.net</span>
                      </a>
                    </div>
                    <div>
                      <p className="text-brown-600 mb-1">온라인 주문</p>
                      <a 
                        href="https://smartstore.naver.com/brownfield" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-green-600 font-medium hover:text-green-700 hover:underline transition-all duration-200 bg-green-50 hover:bg-green-100 px-3 py-2 rounded-lg border border-green-200 hover:border-green-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span>네이버 스마트스토어</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brown-700 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brown-800 mb-3">소셜 미디어</h3>
                  <div>
                    <a 
                      href="https://www.instagram.com/brownfield_roasters/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-pink-600 font-medium hover:text-pink-700 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.864 3.708 13.713 3.708 12.416s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.275c-.875.807-2.026 1.297-3.323 1.297zm7.83-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.827-1.418-1.978-1.418-3.275s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.275z"/>
                      </svg>
                      <span>@brownfield_roasters</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-brown-800 mb-6">위치</h3>
            <div className="bg-gradient-to-br from-brown-100 to-brown-200 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center text-brown-700">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="text-lg font-semibold mb-2">Brownfield Roasters</h4>
                <p className="text-brown-600">옥포대첩로 20, 거제</p>
                <p className="text-sm text-brown-500 mt-4">
                  * 정확한 위치는 네비게이션을 이용해주세요
                </p>
              </div>
            </div>
            
            {/* Directions */}
            <div className="mt-6 p-4 bg-coffee-50 rounded-lg">
              <h4 className="font-semibold text-brown-800 mb-2">찾아오시는 방법</h4>
              <ul className="text-sm text-brown-600 space-y-1">
                <li>• 거제시 옥포대첩로 20번지</li>
                <li>• 대중교통 이용 시 옥포터미널에서 도보 이용</li>
                <li>• 주차 공간 있음</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 