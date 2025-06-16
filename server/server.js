const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const path = require('path');
const fs = require('fs-extra');
const NaverSmartStoreScraper = require('./scraper');

const app = express();
const PORT = process.env.PORT || 3001;

// 미들웨어
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '../public/images')));

// 스크래핑 상태 관리
let scrapingStatus = {
  isRunning: false,
  lastRun: null,
  lastSuccess: null,
  error: null,
  productsCount: 0
};

// 상품 데이터 캐시
let cachedProducts = [];

// 상품 데이터 로드
async function loadProducts() {
  try {
    const dataPath = path.join(__dirname, '../src/data/products.json');
    if (await fs.pathExists(dataPath)) {
      cachedProducts = await fs.readJson(dataPath);
      scrapingStatus.productsCount = cachedProducts.length;
      console.log(`캐시된 상품 ${cachedProducts.length}개 로드됨`);
    }
  } catch (error) {
    console.error('상품 데이터 로드 오류:', error);
  }
}

// 스크래핑 실행
async function runScraping() {
  if (scrapingStatus.isRunning) {
    console.log('이미 스크래핑이 실행 중입니다.');
    return;
  }

  scrapingStatus.isRunning = true;
  scrapingStatus.lastRun = new Date();
  scrapingStatus.error = null;

  console.log('스크래핑 시작...');

  try {
    const scraper = new NaverSmartStoreScraper();
    const products = await scraper.scrapeAllProducts();
    
    if (products && products.length > 0) {
      cachedProducts = products;
      scrapingStatus.lastSuccess = new Date();
      scrapingStatus.productsCount = products.length;
      console.log(`스크래핑 성공: ${products.length}개 상품`);
    } else {
      throw new Error('스크래핑된 상품이 없습니다.');
    }

  } catch (error) {
    console.error('스크래핑 오류:', error);
    scrapingStatus.error = error.message;
  } finally {
    scrapingStatus.isRunning = false;
  }
}

// API 라우트들

// 상품 목록 조회
app.get('/api/products', (req, res) => {
  res.json({
    success: true,
    data: cachedProducts,
    meta: {
      count: cachedProducts.length,
      lastUpdate: scrapingStatus.lastSuccess
    }
  });
});

// 스크래핑 상태 조회
app.get('/api/scraping/status', (req, res) => {
  res.json({
    success: true,
    data: scrapingStatus
  });
});

// 수동 스크래핑 실행
app.post('/api/scraping/run', async (req, res) => {
  if (scrapingStatus.isRunning) {
    return res.status(409).json({
      success: false,
      message: '이미 스크래핑이 실행 중입니다.'
    });
  }

  // 백그라운드에서 실행
  runScraping();

  res.json({
    success: true,
    message: '스크래핑이 시작되었습니다. 상태는 /api/scraping/status에서 확인하세요.'
  });
});

// 특정 상품 조회
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = cachedProducts.find(p => p.id === productId);
  
  if (!product) {
    return res.status(404).json({
      success: false,
      message: '상품을 찾을 수 없습니다.'
    });
  }

  res.json({
    success: true,
    data: product
  });
});

// 추천 상품 조회
app.get('/api/products/featured', (req, res) => {
  const featuredProducts = cachedProducts.filter(p => p.featured);
  
  res.json({
    success: true,
    data: featuredProducts,
    meta: {
      count: featuredProducts.length
    }
  });
});

// 헬스 체크
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date(),
    uptime: process.uptime()
  });
});

// 에러 핸들링 미들웨어
app.use((error, req, res, next) => {
  console.error('서버 오류:', error);
  res.status(500).json({
    success: false,
    message: '서버 내부 오류가 발생했습니다.',
    error: process.env.NODE_ENV === 'development' ? error.message : undefined
  });
});

// 404 핸들링
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: '요청한 리소스를 찾을 수 없습니다.'
  });
});

// 서버 시작
app.listen(PORT, async () => {
  console.log(`🚀 스크래핑 서버가 포트 ${PORT}에서 실행 중입니다.`);
  console.log(`📊 API 엔드포인트:`);
  console.log(`   GET  /api/products - 모든 상품 조회`);
  console.log(`   GET  /api/products/:id - 특정 상품 조회`);
  console.log(`   GET  /api/products/featured - 추천 상품 조회`);
  console.log(`   POST /api/scraping/run - 수동 스크래핑 실행`);
  console.log(`   GET  /api/scraping/status - 스크래핑 상태 조회`);
  console.log(`   GET  /api/health - 서버 상태 확인`);
  
  // 기존 데이터 로드
  await loadProducts();
  
  // 서버 시작 시 한 번 스크래핑 실행 (선택사항)
  if (cachedProducts.length === 0) {
    console.log('초기 데이터가 없어 스크래핑을 시작합니다...');
    setTimeout(() => runScraping(), 5000); // 5초 후 실행
  }
});

// 자동 스크래핑 스케줄 (매일 오전 6시)
cron.schedule('0 6 * * *', () => {
  console.log('예약된 스크래핑 실행...');
  runScraping();
}, {
  timezone: "Asia/Seoul"
});

// 프로세스 종료 시 정리
process.on('SIGINT', () => {
  console.log('\n서버를 종료합니다...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n서버를 종료합니다...');
  process.exit(0);
}); 