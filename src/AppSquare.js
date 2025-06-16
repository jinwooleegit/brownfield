import React from 'react';
import Hero from './components/Hero';
import StrengthsSquare from './components/StrengthsSquare';
import products from './data/products.json';

// --- About Section (Instagram Style, Rich Content) ---
const aboutCards = [
  {
    title: '거제도에서 시작된 여정',
    text: 'Brownfield Roasters는 거제도의 아름다운 자연 속에서 시작된 스페셜티 커피 로스터리입니다. 우리는 커피가 단순한 음료를 넘어서 사람들을 연결하는 특별한 매개체라고 믿습니다.',
    img: '/images/SnapInsta.to_497679542_18052712129348183_413711426659425542_n.jpg',
  },
  {
    title: '소통과 연결의 공간',
    text: '각자의 삶을 살아가는 사람들이 커피라는 갈색의 매개체를 통해 만나고, 소통하며, 새로운 관계를 형성해 나가는 따뜻한 공간을 만들어갑니다.',
    img: '/images/SnapInsta.to_486756223_18048158288348183_299248871075608507_n.jpg',
  },
  {
    title: '정성과 사랑이 담긴 한 잔',
    text: '신선하게 로스팅된 원두와 정성스럽게 내린 커피 한 잔으로 여러분의 일상에 작은 행복과 따뜻한 소통의 순간을 선사합니다.',
    img: '/images/SnapInsta.to_504064724_18054766886348183_2054420973040220017_n.jpg',
  },
];
const InstaAbout = () => (
  <section id="about" className="py-12 bg-white border-b border-gray-100 flex flex-col items-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">About</h2>
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {aboutCards.map((card, idx) => (
        <div key={card.title} className="bg-white rounded-2xl shadow border border-gray-100 p-4 flex flex-col items-center">
          <div className="w-full aspect-square bg-gray-100 rounded-xl overflow-hidden mb-3 flex items-center justify-center">
            <img src={card.img} alt={card.title} className="object-cover w-full h-full" loading="lazy" decoding="async" />
          </div>
          <div className="w-full text-center">
            <div className="font-bold text-lg text-gray-900 mb-2">{card.title}</div>
            <div className="text-gray-700 text-sm mb-2">{card.text}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="flex gap-2 mb-2">
      <a href="#menu" className="text-pink-600 hover:text-pink-800 underline text-sm">#로스팅</a>
      <a href="#products" className="text-pink-600 hover:text-pink-800 underline text-sm">#스페셜티</a>
      <a href="#about" className="text-pink-600 hover:text-pink-800 underline text-sm">#거제도</a>
    </div>
  </section>
);

// --- Menu Section (Instagram Style, Full Content, Category Nav) ---
const menuData = [
  {
    category: "에스프레소 베이스",
    items: [
      { name: "에스프레소", price: "3,000", description: "진한 에스프레소 샷" },
      { name: "아메리카노", price: "4,000", description: "깔끔하고 진한 아메리카노" },
      { name: "카페라떼", price: "4,500", description: "부드러운 우유와 에스프레소의 조화" },
      { name: "카푸치노", price: "4,500", description: "풍성한 거품과 함께하는 클래식" },
      { name: "카페모카", price: "5,000", description: "달콤한 초콜릿과 커피의 만남" },
    ]
  },
  {
    category: "스페셜티 커피",
    items: [
      { name: "핸드드립 커피", price: "6,000", description: "바리스타가 직접 내리는 특별한 커피" },
      { name: "콜드브루", price: "4,500", description: "12시간 저온 추출한 부드러운 커피" },
      { name: "아인슈페너", price: "5,500", description: "진한 커피 위에 올린 휘핑크림" },
      { name: "플랫화이트", price: "5,000", description: "진한 에스프레소와 벨벳 우유" },
    ]
  },
  {
    category: "논커피 음료",
    items: [
      { name: "핫초콜릿", price: "4,000", description: "진한 초콜릿의 달콤함" },
      { name: "차이라떼", price: "4,500", description: "향신료가 가득한 인도식 밀크티" },
      { name: "그린티라떼", price: "4,500", description: "부드러운 녹차와 우유" },
      { name: "레몬에이드", price: "4,000", description: "상큼한 레몬의 청량감" },
    ]
  },
  {
    category: "디저트",
    items: [
      { name: "크루아상", price: "3,500", description: "바삭하고 버터향 가득한" },
      { name: "머핀", price: "3,000", description: "촉촉하고 달콤한 홈메이드" },
      { name: "치즈케이크", price: "4,500", description: "부드럽고 진한 치즈의 맛" },
      { name: "브라우니", price: "4,000", description: "진한 초콜릿의 깊은 맛" },
    ]
  }
];
const [espresso, specialty, noncoffee, dessert] = menuData;
const menuNav = [
  { label: '에스프레소', anchor: 'espresso' },
  { label: '스페셜티', anchor: 'specialty' },
  { label: '논커피', anchor: 'noncoffee' },
  { label: '디저트', anchor: 'dessert' },
];
const InstaMenu = () => (
  <section id="menu" className="py-12 bg-white border-b border-gray-100 flex flex-col items-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Menu</h2>
    <div className="flex gap-3 mb-8 flex-wrap justify-center">
      {menuNav.map(nav => (
        <a key={nav.anchor} href={`#${nav.anchor}`} className="px-4 py-2 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 text-sm font-medium border border-pink-200 transition">{nav.label}</a>
      ))}
    </div>
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
      {menuData.map((cat, i) => (
        <div key={cat.category} id={menuNav[i].anchor} className="bg-white rounded-2xl shadow border border-gray-100 p-6 flex flex-col items-center">
          <h3 className="font-bold text-lg text-gray-900 mb-4">{cat.category}</h3>
          <div className="w-full flex flex-col gap-4">
            {cat.items.map(item => (
              <div key={item.name} className="flex flex-col sm:flex-row sm:items-center justify-between w-full bg-pink-50 rounded-xl p-4 shadow-sm">
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{item.name}</div>
                  <div className="text-gray-600 text-sm mb-1">{item.description}</div>
                </div>
                <div className="ml-0 sm:ml-4 mt-2 sm:mt-0 text-pink-600 font-bold text-lg">{item.price}원</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="mt-10 flex flex-col items-center">
      <div className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 mb-2 transition-colors duration-200">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <a href="https://smartstore.naver.com/brownfield" target="_blank" rel="noopener noreferrer" className="font-medium">네이버 스마트스토어에서 주문하기</a>
      </div>
      <div className="text-sm text-gray-500">카페, 레스토랑, 사무실 등에 신선한 원두를 공급해드립니다. <a href="mailto:bfield20@daum.net" className="underline text-pink-600">bfield20@daum.net</a></div>
    </div>
  </section>
);

// --- Products, Gallery, Contact, Footer는 이전과 동일 ---
const InstaProducts = () => (
  <section id="products" className="py-12 bg-white border-b border-gray-100 flex justify-center">
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

const InstaContact = () => (
  <section className="py-12 bg-white border-b border-gray-100 flex justify-center">
    <div className="bg-white rounded-2xl shadow p-8 w-full max-w-2xl flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact</h2>
      <p className="text-gray-700 text-center mb-2">문의는 인스타그램 DM 또는 아래 이메일로 부탁드립니다.</p>
      <a href="mailto:info@brownfield.com" className="text-pink-600 hover:text-pink-800 underline text-base font-medium">info@brownfield.com</a>
    </div>
  </section>
);

// --- StrengthsSquare with order instructions ---
const StrengthsSquareWithOrder = () => (
  <div id="strengths-order">
    <StrengthsSquare />
    <div className="max-w-2xl mx-auto mt-8 mb-12 bg-pink-50 border border-pink-200 rounded-2xl p-6 text-center shadow">
      <h3 className="text-xl font-bold text-pink-700 mb-2">주문 방법</h3>
      <p className="text-gray-700 mb-2">브라운필드 원두 및 제품은 아래 방법으로 주문하실 수 있습니다.</p>
      <div className="flex flex-col gap-2 items-center">
        <a href="mailto:bfield20@daum.net" className="text-pink-600 hover:text-pink-800 underline text-base font-medium">이메일 주문: bfield20@daum.net</a>
        <a href="https://smartstore.naver.com/brownfield" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900 underline text-base font-medium">네이버 스마트스토어 주문하기</a>
      </div>
    </div>
  </div>
);

// --- Instagram Link at the Bottom ---
const InstaInstagramLink = () => (
  <div className="w-full flex justify-center py-16 bg-gradient-to-r from-pink-100 via-white to-pink-100 border-t border-pink-200">
    <a href="https://www.instagram.com/brownfield_roasters/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
      <span className="text-2xl font-bold text-pink-700">인스타그램(@brownfield_roasters)</span>
      <span className="text-lg text-gray-700">에서 더 많은 사진 보기</span>
      <svg className="w-10 h-10 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.25 2.25a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"/></svg>
    </a>
  </div>
);

const InstaFooter = () => (
  <footer className="py-8 bg-white border-t border-gray-100 text-center text-gray-400 text-sm">
    &copy; {new Date().getFullYear()} brownfield_roasters. All rights reserved.
  </footer>
);

function AppSquare() {
  return (
    <div className="App bg-gray-50 min-h-screen">
      <Hero />
      <StrengthsSquareWithOrder />
      <InstaAbout />
      <InstaMenu />
      <InstaProducts />
      <InstaContact />
      <InstaInstagramLink />
      <InstaFooter />
    </div>
  );
}

export default AppSquare; 