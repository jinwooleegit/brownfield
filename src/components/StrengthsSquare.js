import React from 'react';

const images = [
  '/images/roasting1.jpg',
  '/images/roasting2.jpg',
  '/images/roasting3.jpg',
  '/images/roasting4.jpg',
];

const StrengthsSquare = () => (
  <section className="relative py-24 bg-white min-h-[60vh] flex flex-col items-center">
    <div className="max-w-4xl w-full mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4 tracking-tight">브라운필드의 강점</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed text-left md:text-center">
          브라운필드는 <span className="font-bold text-pink-600">모든 원두를 직접 로스팅</span>하여 신선함과 풍미를 최우선으로 생각합니다.<br/>
          매장에서 직접 로스팅한 원두만을 사용해, 각 산지의 개성을 살린 최적의 맛을 제공합니다.<br/>
          <span className="text-pink-500">로스팅부터 포장까지</span> 모든 과정을 꼼꼼하게 관리하며, 고객님께 <span className="font-bold">최상의 커피 경험</span>을 선사합니다.
        </p>
        <a href="https://www.instagram.com/brownfield_roasters/" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-pink-600 hover:text-pink-800 underline text-base font-medium">
          인스타그램(@brownfield_roasters)에서 더 많은 사진 보기
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {images.map((src, idx) => (
          <div key={src} className="bg-white rounded-2xl shadow border border-gray-100 p-4 flex flex-col items-center instagram-card">
            {/* Instagram style header */}
            <div className="flex items-center w-full mb-3">
              <img src="/images/brownfield-logo.jpg" alt="브라운필드 로고" className="w-8 h-8 rounded-full border mr-3" />
              <span className="font-semibold text-gray-900 text-sm">brownfield_roasters</span>
              <span className="ml-auto text-gray-400 text-xs">• {idx + 1}일 전</span>
            </div>
            {/* Image */}
            <div className="w-full aspect-square bg-gray-100 rounded-xl overflow-hidden mb-3 flex items-center justify-center">
              <img
                src={src}
                alt={`로스팅 현장 사진 ${idx + 1}`}
                className="object-cover w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Instagram style footer */}
            <div className="flex items-center w-full mt-2">
              <svg className="w-5 h-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
              <span className="text-sm text-gray-700">좋아요</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StrengthsSquare; 