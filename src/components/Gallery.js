import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const galleryImages = [
    {
      src: "/images/SnapInsta.to_476109587_18043028459348183_2103165321023049801_n.jpg",
      alt: "정성스럽게 만든 라떼 아트 - Brownfield Roasters",
      caption: "정성스럽게 만든 라떼 아트"
    },
    {
      src: "/images/SnapInsta.to_476070008_18043219649348183_1199045041563245024_n.jpg",
      alt: "신선하게 로스팅된 커피 원두 - Brownfield Roasters",
      caption: "신선하게 로스팅된 원두"
    },
    {
      src: "/images/SnapInsta.to_485095657_18047692814348183_4012572042235895191_n.jpg",
      alt: "따뜻하고 편안한 카페 공간 - Brownfield Roasters",
      caption: "따뜻하고 편안한 공간"
    },
    {
      src: "/images/SnapInsta.to_488253720_18048891236348183_8135866205698957006_n.jpg",
      alt: "바리스타의 정성스러운 커피 제조 과정 - Brownfield Roasters",
      caption: "바리스타의 정성스러운 손길"
    },
    {
      src: "/images/SnapInsta.to_491422271_18051121529348183_476808749342785012_n.jpg",
      alt: "스페셜티 커피의 깊은 맛 - Brownfield Roasters",
      caption: "스페셜티 커피의 깊은 맛"
    },
    {
      src: "/images/SnapInsta.to_505405965_18055363589348183_4101129269674964028_n.jpg",
      alt: "커피와 함께하는 일상 - Brownfield Roasters",
      caption: "커피와 함께하는 일상"
    },
    {
      src: "/images/SnapInsta.to_420963678_7091095104304850_8762328600346046408_n.jpg",
      alt: "특별한 커피 경험 - Brownfield Roasters",
      caption: "특별한 커피 경험"
    },
    {
      src: "/images/SnapInsta.to_342156376_612180477182347_3937757764898107411_n.jpg",
      alt: "소중한 커피 시간 - Brownfield Roasters",
      caption: "소중한 커피 시간"
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-coffee-50 to-brown-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <span className="text-coffee-600 font-medium text-lg tracking-wider uppercase mb-4 block">Gallery</span>
            <h2 className="text-5xl md:text-7xl font-bold font-serif text-brown-800 mb-6 relative">
              갤러리
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-coffee-400 to-coffee-600 rounded-full"></div>
            </h2>
            <p className="text-xl text-brown-600 max-w-2xl mx-auto leading-relaxed">
              Brownfield Roasters의 일상과 특별한 순간들을 만나보세요
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="aspect-square">
                {!imageErrors[index] ? (
                  <img 
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-coffee-100 to-coffee-200 flex items-center justify-center">
                    <div className="text-center text-coffee-600">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">이미지를 불러올 수 없습니다</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Link */}
        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/brownfield_roasters/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            aria-label="Brownfield Roasters Instagram 페이지 방문"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="font-semibold">Instagram에서 더 많은 사진 보기</span>
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              loading="eager"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full p-2"
              aria-label="갤러리 모달 닫기"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white text-lg font-medium bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2" id="modal-title">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 