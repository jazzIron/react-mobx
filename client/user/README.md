
# FrontEnd Admin Project

## React

리액트 컴포넌트 구조는 다음과 같습니다.

```text
src/ 
  components/ - 기초 컴포넌트
  features/ - 페이지의 조각들
  pages/ - 컨테이너의 역할을 겸 하는 페이지
  store/ - recoil등 전역 상태관리에 사용되는 스토어
  assets/ - 컴파일에 제외되는 자원 파일들
  layout/ - 레이아웃에 관여하는 페이지 조각들
  routes/ - url 경로 및 권한 등의 체크에 관여하는 분기 처리
  utils/ - 단일 기능성 함
  i18n/ - 다국어 관련 모음
```

## build

yarn을 사용합니다.  
CRA로 설정되어 craco로 웹팩 설정들을 덧 씌워서 사용합니다.

```bash
yarn  // 의존성 설치
yarn start  // 리액트 개발서버 구동
yarn storybook  // 스토리북 개발 서버 구동
yarn build  // 스토리북 배포 파일 형태로 빌드
```

## Git

### Commit Convention

모든 커밋은 메시지 맨 앞에 커밋의 성격을 표시해야 한다. []로 감싸고 이후에 커밋에 대한 간략한 설명을 표기한다.  
추가적인 설명이 필요 한 경우 개행 후 -로 항목에 대한 설명을 추가한다.

```text
[Feat] 버튼 컴포넌트 신규 기능 추가
- 버튼 동작방식 정리
- 버튼 스타일 예외처리
```

- feat : 기능 추가
- fix : 기능 수정
- docs : 문서 작업

## 다국어

## 글로벌 스타일
