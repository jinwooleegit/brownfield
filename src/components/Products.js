import React, { useState, useEffect } from 'react';
import productsData from '../data/products.json';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 로컬 JSON 데이터 사용
    setProducts(productsData);
    setLoading(false);
  }, []);

  const getRoastLevelColor = (level) => {
    switch (level) {
      case 'Light': return 'bg-yellow-100 text-yellow-800';
      case 'Medium': return 'bg-orange-100 text-orange-800';
      case 'Medium-Dark': return 'bg-red-100 text-red-800';
      case 'Light-Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Dark': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatPrice = (price) => {
    if (!price) return '';
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  if (loading) {
    return (
      <section id="products" className="section-padding bg-coffee-50">
        <div className="container-max">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brown-600 mx-auto"></div>
            <p className="mt-4 text-brown-600">원두 정보를 불러오는 중...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="section-padding bg-coffee-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <span className="text-coffee-600 font-medium text-lg tracking-wider uppercase mb-4 block">Products</span>
            <h2 className="text-5xl md:text-7xl font-bold font-serif text-brown-800 mb-6 relative">
              원두
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-coffee-400 to-coffee-600 rounded-full"></div>
            </h2>
            <p className="text-xl text-brown-600 max-w-2xl mx-auto leading-relaxed">
              신선하게 로스팅된 프리미엄 원두를 네이버 스마트스토어에서 만나보세요
            </p>
          </div>
        </div>

        {/* 배송 정보 */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <h3 className="text-2xl font-bold text-blue-800">배송 안내</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-green-600 mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-1">무료배송</h4>
                <p className="text-sm text-gray-600">5만원 이상 구매시</p>
                <p className="text-lg font-bold text-green-600 mt-1">0원</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-orange-600 mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-1">기본 배송료</h4>
                <p className="text-sm text-gray-600">5만원 미만 구매시</p>
                <p className="text-lg font-bold text-orange-600 mt-1">3,000원</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-blue-600 mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-1">배송업체</h4>
                <p className="text-sm text-gray-600">안전하고 빠른 배송</p>
                <p className="text-lg font-bold text-blue-600 mt-1">우체국 택배</p>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                📦 주문 후 1-2일 내 발송 | 🚚 평균 배송기간 2-3일 | ☕ 신선한 원두를 빠르게 배송해드립니다
              </p>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        {products.filter(product => product.featured).length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-brown-800 mb-8 text-center">추천 원두</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {products.filter(product => product.featured).map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <div className="h-64 bg-gradient-to-br from-coffee-200 to-coffee-300 flex items-center justify-center overflow-hidden">
                      {product.coverImageLocal ? (
                        <img 
                          src={product.coverImageLocal} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className="text-center text-coffee-600" style={{display: product.coverImageLocal ? 'none' : 'flex'}}>
                        <div>
                          <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.38 0 2.5-1.12 2.5-2.5S19.88 5 18.5 5V3zM16 5v3c0 2.76-2.24 5-5 5s-5-2.24-5-5V5h10z"/>
                          </svg>
                          <p className="text-sm">이미지 로딩 중</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoastLevelColor(product.roastLevel)}`}>
                        {product.roastLevel} 로스팅
                      </span>
                    </div>
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium">품절</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-brown-800 mb-2">{product.name}</h4>
                    <p className="text-brown-600 mb-4 text-sm leading-relaxed">
                      {product.description || '신선하게 로스팅된 프리미엄 원두입니다.'}
                    </p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm text-brown-500">
                        <p>원산지: {product.origin || '원산지 정보 확인 중'}</p>
                        <p>중량: {product.weight || '200g'}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-brown-800">
                          {formatPrice(product.price)}원
                        </span>
                        {product.originalPrice && product.originalPrice !== product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(product.originalPrice)}원
                          </span>
                        )}
                      </div>
                      <a
                        href={product.url || "https://smartstore.naver.com/brownfield"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                          product.inStock
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {product.inStock ? '구매하기' : '품절'}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Products */}
        <div>
          <h3 className="text-2xl font-bold text-brown-800 mb-8 text-center">전체 원두</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-coffee-200 to-coffee-300 flex items-center justify-center overflow-hidden">
                    {product.coverImageLocal ? (
                      <img 
                        src={product.coverImageLocal} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="text-center text-coffee-600" style={{display: product.coverImageLocal ? 'none' : 'flex'}}>
                      <div>
                        <svg className="w-12 h-12 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.38 0 2.5-1.12 2.5-2.5S19.88 5 18.5 5V3zM16 5v3c0 2.76-2.24 5-5 5s-5-2.24-5-5V5h10z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoastLevelColor(product.roastLevel)}`}>
                      {product.roastLevel}
                    </span>
                  </div>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-medium">품절</span>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-bold text-brown-800 mb-1">{product.name}</h4>
                  <p className="text-brown-600 mb-3 text-sm">{product.origin || '원산지 확인 중'}</p>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold text-brown-800">
                        {formatPrice(product.price)}원
                      </span>
                      {product.originalPrice && product.originalPrice !== product.price && (
                        <span className="text-xs text-gray-500 line-through ml-1">
                          {formatPrice(product.originalPrice)}원
                        </span>
                      )}
                    </div>
                    <a
                      href={product.url || "https://smartstore.naver.com/brownfield"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-1 rounded text-sm font-medium transition-colors duration-200 ${
                        product.inStock
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {product.inStock ? '구매' : '품절'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Store Link */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">네이버 스마트스토어</h3>
            <p className="text-lg mb-6 text-green-100">
              더 많은 원두와 커피용품을 만나보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://smartstore.naver.com/brownfield"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>스마트스토어 방문하기</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products; 