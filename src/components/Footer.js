import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-900 text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold font-serif mb-4">Brownfield Roasters</h3>
            <p className="text-coffee-200 leading-relaxed mb-6">
              커피라는 갈색의 매개체를 통해 교류하고 소통하는 특별한 공간. 
              거제도에서 시작된 우리의 이야기를 함께 나누어요.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/brownfield_roasters/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brown-700 hover:bg-brown-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.864 3.708 13.713 3.708 12.416s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.275c-.875.807-2.026 1.297-3.323 1.297zm7.83-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.827-1.418-1.978-1.418-3.275s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.275z"/>
                </svg>
              </a>
              <a 
                href="mailto:bfield20@daum.net"
                className="w-10 h-10 bg-brown-700 hover:bg-brown-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-3 text-coffee-200">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors duration-200"
                >
                  홈
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors duration-200"
                >
                  소개
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors duration-200"
                >
                  메뉴
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors duration-200"
                >
                  연락처
                </button>
              </li>
              <li>
                <a 
                  href="https://smartstore.naver.com/brownfield" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  온라인 주문
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">연락처 정보</h4>
            <div className="space-y-3 text-coffee-200">
              <div>
                <p className="font-medium text-white mb-1">주소</p>
                <p>옥포대첩로 20, Geoje</p>
                <p>경상남도 거제시</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">영업시간</p>
                <p>매일 12:00 - 19:00</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">원두 납품 문의</p>
                <a 
                  href="mailto:bfield20@daum.net"
                  className="hover:text-white transition-colors duration-200"
                >
                  bfield20@daum.net
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brown-700 py-8">
          <div className="flex justify-center items-center">
            <div className="text-coffee-300 text-sm">
              © {currentYear} Brownfield Roasters. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 