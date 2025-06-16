@echo off
echo 브라운필드 스크래핑 서버 시작 중...
echo.

cd server

echo 의존성 설치 중...
npm install

echo.
echo 서버 시작 중...
echo API 서버가 http://localhost:3001 에서 실행됩니다.
echo.
echo 사용 가능한 API 엔드포인트:
echo - GET /api/products - 상품 목록 조회
echo - GET /api/scraping/status - 스크래핑 상태 확인
echo - POST /api/scraping/run - 수동 스크래핑 실행
echo.

npm start

pause 