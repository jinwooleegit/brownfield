# 파비콘 및 소셜 미디어 이미지 설정 가이드

## 필요한 파일들

### 1. 파비콘 파일들
다음 파일들을 `public/` 폴더에 추가해야 합니다:

- `favicon.ico` (16x16, 32x32 포함)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `favicon-48x48.png`

### 2. Apple Touch Icons
- `apple-touch-icon-57x57.png`
- `apple-touch-icon-60x60.png`
- `apple-touch-icon-72x72.png`
- `apple-touch-icon-76x76.png`
- `apple-touch-icon-114x114.png`
- `apple-touch-icon-120x120.png`
- `apple-touch-icon-144x144.png`
- `apple-touch-icon-152x152.png`
- `apple-touch-icon-180x180.png`

### 3. Android Chrome Icons
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

### 4. Microsoft Tiles
- `mstile-70x70.png`
- `mstile-144x144.png`
- `mstile-150x150.png`
- `mstile-310x150.png`
- `mstile-310x310.png`

### 5. 소셜 미디어 공유 이미지
- `og-image.jpg` (1200x630px) - Open Graph 및 Twitter 카드용

## 파비콘 생성 방법

### 추천 온라인 도구:
1. **RealFaviconGenerator** (https://realfavicongenerator.net/)
   - 가장 완전한 파비콘 생성기
   - 모든 플랫폼 지원
   - HTML 코드 자동 생성

2. **Favicon.io** (https://favicon.io/)
   - 간단하고 사용하기 쉬움
   - 이미지, 텍스트, 이모지에서 파비콘 생성

### 사용 방법:
1. `public/images/brownfield-logo.jpg` 파일을 업로드
2. 모든 크기의 파비콘 생성
3. 생성된 파일들을 `public/` 폴더에 저장

## 소셜 미디어 이미지 생성

### Open Graph 이미지 (og-image.jpg)
- **크기**: 1200x630px
- **형식**: JPG 또는 PNG
- **내용**: 브라운필드 로고 + 브랜드 메시지
- **텍스트**: "거제 옥포 로스터리카페 브라운필드"

### 디자인 권장사항:
- 배경: 커피 관련 이미지 또는 브랜드 컬러
- 로고: 중앙 또는 좌측에 배치
- 텍스트: 읽기 쉬운 폰트와 크기
- 여백: 충분한 여백 확보

## 현재 설정된 메타 태그

HTML `<head>` 섹션에 다음이 설정되어 있습니다:
- 모든 크기의 파비콘 링크
- Apple Touch Icon 링크
- Microsoft Tile 설정
- Open Graph 메타 태그
- Twitter 카드 메타 태그
- 웹 앱 매니페스트 링크

## 테스트 방법

### 파비콘 테스트:
1. 브라우저 탭에서 파비콘 확인
2. 북마크 추가 후 파비콘 확인
3. 모바일에서 홈 화면에 추가

### 소셜 미디어 테스트:
1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

## 주의사항

- 파일 크기 최적화 (각 파비콘은 10KB 이하 권장)
- 투명 배경 사용 시 주의 (일부 플랫폼에서 지원 안 함)
- 정사각형 이미지 사용 권장
- 고해상도 디스플레이 고려 