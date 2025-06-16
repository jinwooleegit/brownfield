const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');

class NaverSmartStoreScraper {
  constructor() {
    this.baseUrl = 'https://smartstore.naver.com/brownfield';
    this.browser = null;
    this.page = null;
    
    // 실제 상품 링크들
    this.productLinks = [
      'https://smartstore.naver.com/brownfield/products/11243398254',
      'https://smartstore.naver.com/brownfield/products/11243386954',
      'https://smartstore.naver.com/brownfield/products/11243383392',
      'https://smartstore.naver.com/brownfield/products/11122760442',
      'https://smartstore.naver.com/brownfield/products/11122487209',
      'https://smartstore.naver.com/brownfield/products/7874280702',
      'https://smartstore.naver.com/brownfield/products/6611687774',
      'https://smartstore.naver.com/brownfield/products/6533638194'
    ];
  }

  async init() {
    console.log('브라우저 초기화 중...');
    this.browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu',
        '--disable-blink-features=AutomationControlled',
        '--disable-features=VizDisplayCompositor'
      ]
    });
    this.page = await this.browser.newPage();
    
    // 봇 탐지 방지를 위한 설정
    await this.page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', {
        get: () => undefined,
      });
    });
    
    // 더 현실적인 User-Agent 설정
    await this.page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    // 추가 헤더 설정
    await this.page.setExtraHTTPHeaders({
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
      'Accept-Encoding': 'gzip, deflate, br',
      'DNT': '1',
      'Connection': 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
    });
    
    // 뷰포트 설정
    await this.page.setViewport({ width: 1920, height: 1080 });
  }

  async scrapeProductList() {
    console.log('실제 상품 링크 사용 중...');
    console.log(`총 ${this.productLinks.length}개 상품 링크:`);
    this.productLinks.forEach((link, index) => {
      console.log(`${index + 1}. ${link}`);
    });
    
    return this.productLinks;
  }

  async scrapeProductDetail(productUrl) {
    console.log(`상품 상세 정보 스크래핑: ${productUrl}`);
    
    try {
      await this.page.goto(productUrl, { 
        waitUntil: 'networkidle2',
        timeout: 30000 
      });

      // 더 긴 대기 시간과 특정 요소 대기
      console.log('페이지 로딩 대기 중...');
      await this.page.waitForTimeout(8000);
      
      // 특정 클래스가 로드될 때까지 대기 시도
      try {
        await this.page.waitForSelector('.bd_1uFKu.bd_2PG3r, .WrkQhIlUY0, .se-component.se-image.se-l-default', { timeout: 10000 });
        console.log('주요 요소들이 로드됨');
      } catch (e) {
        console.log('주요 요소 대기 실패, 계속 진행...');
      }

      // 페이지 HTML 구조 확인을 위한 디버깅
      const pageInfo = await this.page.evaluate(() => {
        return {
          title: document.title,
          bodyClasses: document.body.className,
          hasTargetClasses: {
            coverImage: !!document.querySelector('.bd_1uFKu.bd_2PG3r'),
            price: !!document.querySelector('.WrkQhIlUY0'),
            detailImages: !!document.querySelector('.se-component.se-image.se-l-default')
          },
          allClasses: Array.from(document.querySelectorAll('*')).map(el => el.className).filter(c => c).slice(0, 20)
        };
      });
      
      console.log('페이지 정보:', pageInfo);

      const productData = await this.page.evaluate(() => {
        const getTextContent = (selector) => {
          const element = document.querySelector(selector);
          return element ? element.textContent.trim() : '';
        };

        const getImageSrc = (selector) => {
          const element = document.querySelector(selector);
          return element ? element.src || element.getAttribute('data-src') : '';
        };

        // 1. 상품 사진 - bd_1uFKu bd_2PG3r 클래스
        let coverImage = '';
        const coverImageElement = document.querySelector('.bd_1uFKu.bd_2PG3r img');
        if (coverImageElement) {
          coverImage = coverImageElement.src || coverImageElement.getAttribute('data-src') || coverImageElement.getAttribute('data-original');
          console.log(`커버 이미지 발견: ${coverImage}`);
        } else {
          console.log('커버 이미지 요소를 찾을 수 없음');
          // 대체 선택자들 시도
          const altSelectors = ['.bd_1uFKu img', '.bd_2PG3r img', '[class*="bd_"] img'];
          for (const selector of altSelectors) {
            const altElement = document.querySelector(selector);
            if (altElement) {
              coverImage = altElement.src || altElement.getAttribute('data-src');
              console.log(`대체 선택자로 커버 이미지 발견: ${selector} -> ${coverImage}`);
              break;
            }
          }
        }

        // 2. 가격 - WrkQhIlUY0 클래스
        let price = '';
        const priceElement = document.querySelector('.WrkQhIlUY0');
        if (priceElement) {
          const priceText = priceElement.textContent.trim();
          price = priceText.replace(/[^\d,]/g, '');
          console.log(`가격 발견: ${price}`);
        } else {
          console.log('가격 요소를 찾을 수 없음');
          // 대체 선택자들 시도
          const altPriceSelectors = [
            '[class*="WrkQhIlUY0"]', 
            '[class*="price"]', 
            '[class*="Price"]',
            '.price',
            '.sale-price',
            '.current-price'
          ];
          for (const selector of altPriceSelectors) {
            const altElement = document.querySelector(selector);
            if (altElement && altElement.textContent.includes('원')) {
              const priceText = altElement.textContent.trim();
              price = priceText.replace(/[^\d,]/g, '');
              console.log(`대체 선택자로 가격 발견: ${selector} -> ${price}`);
              break;
            }
          }
        }

        // 3. 상세페이지 이미지 - se-component se-image se-l-default 클래스
        const detailImages = [];
        const detailImageElements = document.querySelectorAll('.se-component.se-image.se-l-default img');
        if (detailImageElements.length > 0) {
          detailImageElements.forEach(img => {
            const src = img.src || img.getAttribute('data-src') || img.getAttribute('data-original');
            if (src && src.startsWith('http') && !detailImages.includes(src)) {
              detailImages.push(src);
            }
          });
          console.log(`상세 이미지 ${detailImages.length}개 발견`);
        } else {
          console.log('상세 이미지 요소를 찾을 수 없음');
          // 대체 선택자들 시도
          const altDetailSelectors = [
            '.se-component img',
            '.se-image img',
            '[class*="se-"] img',
            '.detail img',
            '.content img'
          ];
          for (const selector of altDetailSelectors) {
            const altImages = document.querySelectorAll(selector);
            if (altImages.length > 0) {
              altImages.forEach(img => {
                const src = img.src || img.getAttribute('data-src');
                if (src && src.startsWith('http') && !detailImages.includes(src)) {
                  detailImages.push(src);
                }
              });
              console.log(`대체 선택자로 상세 이미지 ${detailImages.length}개 발견: ${selector}`);
              if (detailImages.length >= 3) break;
            }
          }
        }

        // 상품명 추출 - 사용자 제공 선택자 우선 사용
        let productName = '';
        
        // 1. 사용자가 제공한 정확한 선택자 먼저 시도
        const exactNameElement = document.querySelector('._22kNQuEXmb._copyable');
        if (exactNameElement) {
          productName = exactNameElement.textContent.trim();
          console.log(`정확한 선택자로 상품명 발견: ${productName}`);
        } else {
          console.log('정확한 상품명 선택자를 찾을 수 없음, 대체 선택자 시도...');
          
          // 2. 대체 선택자들 시도
          const nameSelectors = [
            '._22kNQuEXmb',
            '._copyable',
            '[class*="_22kNQuEXmb"]',
            '[class*="_copyable"]',
            'h1.product-title',
            '.product-name',
            '.item-name',
            'h1[data-testid="product-name"]',
            '.product-info h1',
            '.product-detail-title',
            '.item-title',
            '.goods-name',
            'h1'
          ];
          
          for (const selector of nameSelectors) {
            const element = document.querySelector(selector);
            if (element) {
              const text = element.textContent.trim();
              if (text && text.length > 2) {
                productName = text;
                console.log(`대체 선택자로 상품명 발견: ${selector} -> ${productName}`);
                break;
              }
            }
          }
        }

        // 상품 설명 (기존 방식 유지)
        const descriptionSelectors = [
          '.product-summary',
          '.product-description',
          '.item-summary',
          '.product-info .description',
          '.goods-summary',
          '.item-description'
        ];
        
        let description = '';
        for (const selector of descriptionSelectors) {
          description = getTextContent(selector);
          if (description && description.length > 10) break;
        }

        console.log('최종 추출된 데이터:', {
          name: productName || '이름 없음',
          price: price || '가격 없음',
          coverImage: coverImage ? '있음' : '없음',
          detailImages: detailImages.length
        });

        return {
          name: productName,
          price: price,
          originalPrice: price, // 할인가가 없으면 동일하게 설정
          description: description,
          coverImage: coverImage,
          detailImages: detailImages.slice(0, 5), // 최대 5개
          url: window.location.href
        };
      });

      // 이미지 다운로드
      if (productData.coverImage) {
        productData.coverImageLocal = await this.downloadImage(productData.coverImage, `cover_${Date.now()}`);
      }

      if (productData.detailImages && productData.detailImages.length > 0) {
        productData.detailImagesLocal = [];
        for (let i = 0; i < productData.detailImages.length; i++) {
          const localPath = await this.downloadImage(productData.detailImages[i], `detail_${Date.now()}_${i + 1}`);
          if (localPath) {
            productData.detailImagesLocal.push(localPath);
          }
        }
      }

      console.log(`스크래핑 완료: ${productData.name || '이름없음'} - ${productData.price || '가격없음'}원`);
      return productData;

    } catch (error) {
      console.error(`상품 상세 스크래핑 오류 (${productUrl}):`, error);
      return null;
    }
  }

  async downloadImage(imageUrl, prefix) {
    try {
      if (!imageUrl || !imageUrl.startsWith('http')) {
        return null;
      }

      const response = await axios.get(imageUrl, { 
        responseType: 'stream',
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });

      const fileName = `${prefix}_${Date.now()}.jpg`;
      const filePath = path.join(__dirname, '../public/images/products', fileName);
      
      // 디렉토리 생성
      await fs.ensureDir(path.dirname(filePath));
      
      const writer = fs.createWriteStream(filePath);
      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
        writer.on('finish', () => {
          console.log(`이미지 다운로드 완료: ${fileName}`);
          resolve(`/images/products/${fileName}`);
        });
        writer.on('error', reject);
      });

    } catch (error) {
      console.error('이미지 다운로드 오류:', error);
      return null;
    }
  }

  async scrapeAllProducts() {
    console.log('=== 네이버 스마트스토어 상품 스크래핑 시작 ===');
    
    try {
      await this.init();
      
      // 1. 상품 목록 페이지에서 링크들 추출
      const productLinks = await this.scrapeProductList();
      
      if (productLinks.length === 0) {
        console.log('상품 링크를 찾을 수 없습니다.');
        return [];
      }

      // 2. 각 상품 상세 정보 스크래핑
      const products = [];
      
      for (let i = 0; i < productLinks.length; i++) {
        console.log(`\n진행률: ${i + 1}/${productLinks.length}`);
        
        const productData = await this.scrapeProductDetail(productLinks[i]);
        
        if (productData) {
          products.push({
            id: i + 1,
            ...productData,
            inStock: true,
            featured: i < 2, // 처음 2개를 추천 상품으로
            roastLevel: this.guessRoastLevel(productData.name),
            origin: this.guessOrigin(productData.name),
            weight: '200g' // 기본값
          });
        }

        // 요청 간격 (너무 빠르면 차단될 수 있음)
        await this.page.waitForTimeout(2000);
      }

      // 3. 결과 저장
      const outputPath = path.join(__dirname, '../src/data/products.json');
      await fs.ensureDir(path.dirname(outputPath));
      await fs.writeJson(outputPath, products, { spaces: 2 });
      
      console.log(`\n=== 스크래핑 완료 ===`);
      console.log(`총 ${products.length}개 상품 정보 저장`);
      console.log(`저장 위치: ${outputPath}`);
      
      return products;

    } catch (error) {
      console.error('스크래핑 프로세스 오류:', error);
      return [];
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
    }
  }

  guessRoastLevel(productName) {
    const name = productName.toLowerCase();
    if (name.includes('라이트') || name.includes('light')) return '라이트';
    if (name.includes('다크') || name.includes('dark')) return '다크';
    if (name.includes('미디엄') || name.includes('medium')) return '미디엄';
    return '미디엄'; // 기본값
  }

  guessOrigin(productName) {
    const origins = {
      '에티오피아': '에티오피아',
      '콜롬비아': '콜롬비아',
      '브라질': '브라질',
      '과테말라': '과테말라',
      '케냐': '케냐',
      '코스타리카': '코스타리카',
      '온두라스': '온두라스'
    };

    for (const [key, value] of Object.entries(origins)) {
      if (productName.includes(key)) {
        return value;
      }
    }
    
    return '원산지 미표기';
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

// 직접 실행 시
if (require.main === module) {
  const scraper = new NaverSmartStoreScraper();
  
  scraper.scrapeAllProducts()
    .then(products => {
      console.log('\n스크래핑된 상품들:');
      products.forEach(product => {
        console.log(`- ${product.name} (${product.price}원)`);
      });
    })
    .catch(error => {
      console.error('스크래핑 실행 오류:', error);
    })
    .finally(() => {
      process.exit(0);
    });
}

module.exports = NaverSmartStoreScraper; 