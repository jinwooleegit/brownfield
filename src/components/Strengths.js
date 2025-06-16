import React from 'react';

const images = [
  '/images/SnapInsta.to_486756223_18048158288348183_299248871075608507_n.jpg',
  '/images/SnapInsta.to_497679542_18052712129348183_413711426659425542_n.jpg',
  '/images/SnapInsta.to_504064724_18054766886348183_2054420973040220017_n.jpg',
];

const Strengths = () => (
  <section className="relative py-24 bg-gradient-to-br from-coffee-50 via-white to-brown-50 overflow-hidden">
    <div className="container-max mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold font-serif text-brown-800 mb-4">브라운필드의 강점</h2>
        <p className="text-xl text-brown-600 max-w-2xl mx-auto leading-relaxed">
          브라운필드는 <span className="font-bold text-coffee-700">모든 원두를 직접 로스팅</span>하여 신선함과 풍미를 최우선으로 생각합니다.<br/>
          매장에서 직접 로스팅한 원두만을 사용해, 각 산지의 개성을 살린 최적의 맛을 제공합니다.<br/>
          <span className="text-coffee-500">로스팅부터 포장까지</span> 모든 과정을 꼼꼼하게 관리하며, 고객님께 <span className="font-bold">최상의 커피 경험</span>을 선사합니다.
        </p>
        <a href="https://www.instagram.com/brownfield_roasters/" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-coffee-600 hover:text-coffee-800 underline text-lg font-medium">
          인스타그램(@brownfield_roasters)에서 더 많은 사진 보기
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {images.map((src, idx) => (
          <div key={src} className="rounded-2xl overflow-hidden shadow-lg group relative">
            <img
              src={src}
              alt={`브라운필드 인스타그램 사진 ${idx + 1}`}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              직접 로스팅 현장 & 매장 스냅
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Strengths; 