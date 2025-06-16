import React from 'react';
import Header from './components/Header';
import StrengthsSquare from './components/StrengthsSquare';
import About from './components/About';
import Menu from './components/Menu';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

// 인스타그램 스타일 Hero
const InstaHero = () => (
  <section className="flex flex-col items-center justify-center py-16 bg-white border-b border-gray-100">
    <div className="bg-white rounded-2xl shadow p-8 w-full max-w-xl flex flex-col items-center">
      <img src="/images/brownfield-logo.jpg" alt="브라운필드 로고" className="w-24 h-24 rounded-full border mb-4" />
      <h1 className="text-4xl font-bold font-serif text-gray-900 mb-2">brownfield_roasters</h1>
      <p className="text-gray-700 text-center mb-4">거제도에서 직접 로스팅하는<br/>브라운필드 커피입니다 ☕</p>
      <a href="https://www.instagram.com/brownfield_roasters/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 underline text-base font-medium">@brownfield_roasters</a>
    </div>
  </section>
);

// 인스타그램 스타일 About
const InstaAbout = () => (
  <section className="py-12 bg-white border-b border-gray-100 flex justify-center">
    <div className="bg-white rounded-2xl shadow p-8 w-full max-w-2xl flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">About</h2>
      <p className="text-gray-700 text-center mb-2">브라운필드는 커피를 통해 사람들을 연결하는 공간입니다.<br/>직접 로스팅한 원두로 매일 신선한 커피를 제공합니다.</p>
      <span className="text-xs text-gray-400">#로스팅 #스페셜티 #거제도</span>
    </div>
  </section>
);

// 인스타그램 스타일 Menu
const InstaMenu = () => (
  <section className="py-12 bg-white border-b border-gray-100 flex justify-center">
    <div className="bg-white rounded-2xl shadow p-8 w-full max-w-2xl flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Menu</h2>
      <p className="text-gray-700 text-center mb-4">브라운필드의 인기 메뉴를 만나보세요!</p>
      {/* 메뉴 이미지는 Products에서 피드처럼 보여주므로 간단 소개만 */}
      <span className="text-xs text-gray-400">#아메리카노 #라떼 #브루잉</span>
    </div>
  </section>
);

// 인스타그램 스타일 Products (피드형)
import products from './data/products.json';
const InstaProducts = () => (
  <section className="py-12 bg-white border-b border-gray-100 flex justify-center">
    <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.slice(0, 6).map((product, idx) => (
        <div key={product.id} className="bg-white rounded-2xl shadow border border-gray-100 p-4 flex flex-col items-center">
          <div className="flex items-center w-full mb-3">
            <img src="/images/brownfield-logo.jpg" alt="브라운필드 로고" className="w-8 h-8 rounded-full border mr-3" />
            <span className="font-semibold text-gray-900 text-sm">brownfield_roasters</span>
            <span className="ml-auto text-gray-400 text-xs">• {idx + 2}일 전</span>
          </div>
          <div className="w-full aspect-square bg-gray-100 rounded-xl overflow-hidden mb-3 flex items-center justify-center">
            <img src={product.coverImageLocal} alt={product.name} className="object-cover w-full h-full" loading="lazy" decoding="async" />
          </div>
          <div className="w-full text-center">
            <div className="font-bold text-gray-900 mb-1">{product.name}</div>
            <div className="text-gray-700 text-sm mb-2">{product.price.toLocaleString()}원</div>
            <div className="flex items-center justify-center mt-2">
              <svg className="w-5 h-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
              <span className="text-sm text-gray-700">좋아요</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// 인스타그램 스타일 Gallery (피드형)
const galleryImages = [
  '/images/roasting1.jpg',
  '/images/roasting2.jpg',
  '/images/roasting3.jpg',
  '/images/roasting4.jpg',
  '/images/signboard.jpg',
];
const InstaGallery = () => (
  <section className="py-12 bg-white border-b border-gray-100 flex justify-center">
    <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 gap-6">
      {galleryImages.map((src, idx) => (
        <div key={src} className="bg-white rounded-2xl shadow border border-gray-100 p-2 flex flex-col items-center">
          <div className="w-full aspect-square bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
            <img src={src} alt={`갤러리 사진 ${idx + 1}`} className="object-cover w-full h-full" loading="lazy" decoding="async" />
          </div>
        </div>
      ))}
    </div>
  </section>
);

// 인스타그램 스타일 Contact
const InstaContact = () => (
  <section className="py-12 bg-white border-b border-gray-100 flex justify-center">
    <div className="bg-white rounded-2xl shadow p-8 w-full max-w-2xl flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact</h2>
      <p className="text-gray-700 text-center mb-2">문의는 인스타그램 DM 또는 아래 이메일로 부탁드립니다.</p>
      <a href="mailto:info@brownfield.com" className="text-pink-600 hover:text-pink-800 underline text-base font-medium">info@brownfield.com</a>
    </div>
  </section>
);

// 인스타그램 스타일 Footer
const InstaFooter = () => (
  <footer className="py-8 bg-white border-t border-gray-100 text-center text-gray-400 text-sm">
    &copy; {new Date().getFullYear()} brownfield_roasters. All rights reserved.
  </footer>
);

function AppSquare() {
  return (
    <div className="App bg-gray-50 min-h-screen">
      <InstaHero />
      <StrengthsSquare />
      <InstaAbout />
      <InstaMenu />
      <InstaProducts />
      <InstaGallery />
      <InstaContact />
      <InstaFooter />
    </div>
  );
}

export default AppSquare; 