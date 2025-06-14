import React from 'react';

const Menu = () => {
  const coffeeMenu = [
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

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-brown-800 mb-6">
            메뉴
          </h2>
          <p className="text-xl text-brown-600 max-w-2xl mx-auto">
            신선하게 로스팅된 원두로 만든 특별한 커피와 정성스럽게 준비한 디저트를 만나보세요
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {coffeeMenu.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-coffee-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-serif text-brown-800 mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start group hover:bg-white hover:shadow-sm rounded-lg p-4 transition-all duration-200">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-brown-800 mb-1 group-hover:text-brown-900">
                        {item.name}
                      </h4>
                      <p className="text-brown-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <span className="text-lg font-bold text-brown-700">
                        {item.price}원
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Notice */}
        <div className="mt-16 bg-gradient-to-r from-brown-700 to-brown-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">원두 납품 서비스</h3>
          <p className="text-lg mb-6 text-coffee-100">
            카페, 레스토랑, 사무실 등에 신선한 원두를 공급해드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>bfield20@daum.net</span>
            </div>
            <div className="text-coffee-200">|</div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>문의 환영</span>
            </div>
          </div>
        </div>

        {/* Online Store Link */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <a 
              href="https://smartstore.naver.com/brownfield" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium"
            >
              네이버 스마트스토어에서 주문하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu; 