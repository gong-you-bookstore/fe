# <img align="left" src="https://user-images.githubusercontent.com/90181028/205477593-6f5f08cd-0344-40cd-89f3-01e258d57567.png" width="100px" /> [공유책방](https://gong-you-bookstore.netlify.app/)

> 공유책방 - client

<br>

<div align="center">
<img src="https://user-images.githubusercontent.com/90181028/205436710-0e0a6088-cc4a-44e4-a172-a84bbe523958.png" width="49%">
<img src="https://user-images.githubusercontent.com/90181028/205436716-ee97efe3-ab95-4d9c-ac0e-66c8a1ba7163.png" width="49%">

![슬라이드1](https://user-images.githubusercontent.com/90181028/207235812-c69846e9-a100-4f44-a641-336c80b083ee.PNG)

![슬라이드2](https://user-images.githubusercontent.com/90181028/207235822-95f25465-9924-446d-9a83-eddb49b7b5ce.PNG)

![슬라이드3](https://user-images.githubusercontent.com/90181028/207235831-3ecb5297-c3d0-475b-9996-977d3ff8da7d.PNG)

</div>


# 📑 INDEX

1. [INTRODUCTION](#1-introduction)
2. [TEAM](#2-team)
3. [KEY FUNTIONS](#3-key-funtions)
4. [기획](#4-기획)  
   4.1. [프로젝트 배경](#41-프로젝트-배경)  
   4.2. [프로젝트 특징](#42-프로젝트-특징)
5. [설계](#5-설계)
6. [디자인 과정](#6-디자인-과정)  
   6.1. [스타일 가이드](#61-스타일-가이드)  
   6.2. [반응형 웹](#62-반응형-웹)  
   6.3. [Design Concept](#63-design-concept)
7. [프론트엔드 코드스타일](#7-코드스타일)
8. [TROUBLE SHOOTING](#8-trouble-shooting)  
   8.1. [Netlify 배포와 서버 통신 문제 해결 과정](#81-netlify-배포와-서버-통신-문제-해결-과정)  
   8.2. [성능관리 - 이미지최적화](#82-성능관리---이미지-최적화)
9. [DIRECTORY](#9-directory)
10. [DEMO](#10-demo)


---

# 1. INTRODUCTION

> 중고 도서 공유 플랫폼

"공유책방"은 더는 활용되지 않은 채 집에 잠들어 있는 책을 깨우고, 나눔을 통하여 책이라는 재화의 효율성을 극대화하는 프로젝트입니다.

- 아주대학교 2022-2 AI융합캡스톤디자인2 프로젝트
- 개발 기간: 2022.10 ~ 2022.12
- 🥇 **아주대학교 2022-2 소프트콘 `최우수상(1등)`, `인기상(현장투표 1등)` 수상**

# 2. TEAM

| 박지헌      | 장윤아    | 허욱      | 정영우          |
| ----------- | --------- | --------- | --------------- |
| @jiheon788  | @zogak    | @Wook0111 | @youngwoo-korea |
| FE / Design | BE / 배포 | RS        | PM              |

# 3. KEY FUNTIONS

- [x] **책 등록**: 내가 가진 책을 검색 및위치 기반 등록
- [x] **바코드 스캔**: ISBN스캔으로 책 등록의 간편화
- [x] **책방**: 장르별 책방과 검색기능을 통한 간편한 책 찾기
- [x] **메시지**: 유저간 거래 및 나눔을 위한 메시지 기능을 구현
- [x] **토큰**: 상대와 거래를 하며 토큰을 교환하는 기능 구현
- [x] **추천시스템**: 책 상세보기에서 유사한 책들을 추천
- [x] **갤러리**: 내가 등록한 책과, 사용자 맞춤 추천 책들을 볼 수 있는 갤러리 페이지

# 4. 기획

## 4.1. 프로젝트 배경

> 집에 잠들어 있는 책을 깨우고, 토큰을 통한 나눔(Sharing)을 통하여 ‘도서’라는 재화의 효율성을 증대시키자

공유 책방 프로젝트는 ‘더는 활용되지 않은 채 집에 잠들어 있는 책을 깨우고, 토큰을 통한 나눔(Sharing)을 통하여 ‘도서’라는 재화의 효율성을 증대시키자!’는 것에 목적이 있다. 우리 팀은 대회 참여를 위한 주제 선정 과정에서 ‘자원의 효율적 활용(Resource Utilization)’을 적극적으로 지원할 수 있는 아이디어를 모색하였고, 토큰을 통한 중고도서 공유 플랫폼을 기획하게 되었다.

도서라는 자원이 현재 효율적으로 활용되고 있지 않다고 판단한 이유는 다음과 같다. 책은 시간이 지나도 휘발되지 않으며, 계속해서 존재한다는 `영속성`과 대다수의 책은 ‘정보전달’의 목적을 마치게 되면, 다시 찾지 않는다는 `단기성`을 가지고 있다. 즉, ‘책’이라는 재화는 여전히 존재하는데 반해 지속적 & 장기적으로 활용되고 있지 않는다는 것이다. (아래 그래프의 노란 부분)

![image](https://user-images.githubusercontent.com/90181028/206106447-b8b1c91b-c6a8-4c61-b08a-733736bc20c5.png)

- 도서의 속성과 그에 따른 잉여 자원 도식화

`영속성` 및 `단기성`에 따른 `잉여자원`은 책을 포함한 실생활 다수의 재화에서 공통적으로 나타난다. 하지만 전자기기, 브랜드 의류와 같은 재화는 활발하게 중고거래가 이루어지는 반면, 도서의 경우에는 화폐가치가 기존 원가의 30~60%에 머무르는 `감가 가속성`으로 인해 이용자가 `판매`라는 행위에 따른 경제적 효용이 크지 않아 이용자 간의 직접적인 거래가 활발하게 일어나지 않고 있다. 또한 이 같은 이유로 중고서적 시장이 기업형 서점에 종속되어 판매자와 구매자의 효용이 모두 감소하고 있다.

우리 팀은 이와 같은 현 상황을 자원이 낭비되는 `비효율적 상황`이라고 정의내렸고, 이를 해결할 수 있는 방법을 고안하기 위해 `공유책방` 프로젝트를 수행하게 되었다.

## 4.2. 프로젝트 특징

### 4.2.1. 토큰을 통한 공유(Sharing Through Token)

> 도서는 감가 가속성으로 인해 판매에 따른 경제적 효용이 크지 않다.

경제적 효용이 높지 않다는 인식을 바꾸기 위해 플랫폼 내에서 유통되는 토큰(Token)을 사용하기로 결정했으며, 또한 토큰은 공유책방 플랫폼에 한정되기에 향후 서비스 이용자를 Lock-in할 수 있는 효율적인 수단이라고 판단하였다. 이용자를 지속적으로 플랫폼 내에 머무르게 하고, 토큰을 통한 공유활동이 활발해진다면 도서 자원의 공유 선순환 구조를 만들 수 있을 것이라 생각했다.

### 4.2.2. D2C 기반의 중고 도서 전용 플랫폼

국내 중고도서 시장을 살펴보았을 때, 크게 B2C와 D2C로 나누어 볼 수 있다.

- B2C(Business To Customer): 기업형 플랫폼 (알라딘, Yes24) - 중간매입자의 존재로 기업 이윤의 극대화에 초점이 맞춰짐(이용자 효용 감소)
- D2C(Direct To Customer): 종합 중고거래 플랫폼(번개장터, 당근마켓, 중고나라) - 종합 중고 플랫폼 위주로 운영되고 있으며 타 제품군에 비해 중고도서 거래의 효용이 낮아 시장이 성장하지 못하고 있음.

우리 팀은 기존 서비스(산업)의 한계점을 극복하기 위해 ‘토큰을 통한 나눔을 지원하는 D2C 기반의 중고 도서 공유 플랫폼’을 기획하게 되었다.

### 4.2.3. 플랫폼 내에서의 추천 기능 제공

플랫폼 비즈니스에서 이용자의 수(ex. MAU 지수: Month Annual User)가 Critical Path(임계점)을 넘게 되면 컨텐츠는 폭발적으로 증가하게 된다. 이의 경우, 이용자는 자신에게 적합한 컨텐츠를 탐색하는데 어려움을 겪게 될 것이고, 결과적으로 User Experience가 감소될 수 있다고 판단해 `머신러닝 기반의 추천시스템`을 구축하였다.

# 5. 설계

공유책방은 `마이크로서비스 아키텍처(Microservices Architecture)`를 채택하여 서버를 메인서버와 추천서버로 나누었다. 마이크로 서비스는 프로젝트의 기능들은 `독립적`으로 느슨하게 결합된 모듈로 분해하여 서비스를 제공하는 아키텍쳐이다. 각 개별 모듈은 개별적인 작업을 담당하며 간단하고 보편적으로 엑세스 할 수 있는 API를 통해 다른 모듈과 통신 한다.

유저관리, 책방관리, 메시지등 메인 로직을 담당하는 `메인 서버`는 Spring boot로 만들어 EC2로 배포, 책의 추천만을 담당하는 `추천 시스템 서버`는 사이킷런과 faiss로 학습한 추천 모델을 플라스크 서버에 올려 EC2로 배포하였다. 공유책방의 `클라이언트`는 React로 만들어 Netlify에 배포하고, 외부 API로 kakao developer와 국립중앙도서관의 api를 통해 책 정보 조회와 Map을 사용한다.

기능단위로 분리함으로써 단일 모듈 장애에 대해 전체 어플리케이션은 크게 영향을 받지 않게 하였다.

![공유책방-시스템구조도](https://user-images.githubusercontent.com/90181028/206103160-0fefc587-5079-4230-9b82-763ad186dbaa.png)

- 공유책방 시스템 구조도

# 6. 디자인 과정

## 6.1. 스타일 가이드

기획단계에서 유사서비스들의 UI를 분석하며 사용성과 심미성을 고려한 “공유책방”의 UI를 기획하였다. CTR을 높이기 위한 버튼의 디자인과 서비스의 사용성을 해치지 않는 alert창 등을 고민하여 디자인 하였다. 결과물로 로고와 메인칼라, 폰트, UI 컴포넌트 등 디자인 요소들을 정리한 Style Guide를 작성하였다.

![image](https://user-images.githubusercontent.com/90181028/205478417-745031e0-7908-48bb-8147-0d2a530e6204.png)

- 공유책방 Style Guide

## 6.2. 반응형 웹

온라인 서비스의 핵심은 모바일, 태블릿, 데스크탑 다양한 환경에서 사용이 가능하게 하여 `접근성`을 높이는 것이라고 생각하였다. 반응형 웹디자인의 패턴으로 가장 작은 화면에서는 수직으로 컬럼을 세우고, 다른 화면에서는 유동형 그리드와 유동형 이미지를 사용하여 레이아웃을 그대로 유지하는 `유동형(Mostly Fluid) 패턴`을 적용하였다. 유동형 패턴은 주로 유동형 격자(grid)로 구성된다. 대형 혹은 중간크기의 스크린에서 이 패턴은 보통 같은 크기로 간주되며, 단지 더 넓은 화면에서는 여백정도만 조정된다. 더 작은 스크린에서 이 패턴은 열(columns)들이 수직 방향으로 쌓이면서 컨텐츠가 재배치된다. 유동형 패턴은 작은 화면과 큰 화면 사이에 단 하나의 중단점(breakpoints)만 있으면 된다는 장점이 있어 채택하였고, CSS의 `Media Query`를 사용하여 `반응형 웹`으로 개발하였다.
![image](https://user-images.githubusercontent.com/90181028/205478450-cb7c719b-ec84-482d-aa98-2cd4d9e2bfd9.png)

- 유동형(Mostly Fluid) 패턴

## 6.3. Design Concept

공유책방은 `토큰`이라는 새로운 화폐개념을 도입함으로써 공유책방만의 새로운 경제체계를 가진 `새로운 세상`을 만들고 싶었다. 가장 첫 화면에는 새로운 세상으로의 입구라는 상징적인 의미를 주고 싶어 공간감을 주는 패턴의 문사진을 배치하였다. 또한 페이지 이동시마다 해당 페이지의 정체성에 적합한 사진을 배치하고, 일정시간(1000ms)후에 자동으로 스크롤이 내려가며 공유책방에 빨려들어가는 느낌을 주는 동시에 유저의 스크롤 수를 줄여 `편의성`을 높이려 하였다. `갤러리`는 내가 등록한 책과, 사용자 맞춤 추천책을 볼 수 있는 개인적인 공간인데 `가상의 내 책장`이라는 느낌을 주려고 하였다. 책들은 hover가 되면 box-shadow와 회전을 적절히 사용하여 마치 책을 집는듯한 `시각적 재미`를 준다.

![image](https://user-images.githubusercontent.com/90181028/205478459-5bee7b0f-82c0-446d-8651-210f87f3e2bb.png)

- 공유책방 와이어프레임과 디자인 산출물

![image](https://user-images.githubusercontent.com/90181028/205639618-f5a336fa-61a3-4b24-8d44-189722b9a43f.png)

- 공유책방 갤러리

# 7. 코드스타일

리액트는 UI를 구성하는 개별적인 뷰 단위인 컴포넌트가 블록역할을 하며 이를 조립해 하나의 완성품을 만든다. 이러한 리액트의 특징을 살려 각 컴포넌트간 의존성을 줄이고 독립적인 컴포넌트로 분리하는 리팩토링 작업을 지속적으로 거치며 생산성과 유지보수를 용이하게 하였다.

# 8. TROUBLE SHOOTING

## 8.1. Netlify 배포와 서버 통신 문제 해결 과정

### 8.1.1. 문제 정의

공유책방의 프론트엔드는 `Netlify`를 사용해 배포하였다. Netlify는 정적인 웹을 무료로 배포하여주는 웹서비스이며 `무료`라는 점과 Github와 연동하여 `간편한 배포`가 가능하다는 장점을 가지고 있어 채택하였다.

하지만 개발단계의 로컬환경에서는 서버와의 통신에 문제가 없었으나, Netlify 환경에서 프론트가 서버와의 통신을 못하는 문제가 있었다.

### 8.1.2. 원인

Netlify 기본적으로 HTTPS를 제공하는 반면, 서버는 AWS의 EC2를 사용해 배포하고 SSL 인증을 받지 않는 HTTP 방식의 통신을 하였다. HTTPS와 HTTP의 통신을 금지하는 네트워크 정책으로인해 배포환경에서 프론트가 서버와의 통신을 못한다.

### 8.1.3. 해결

Netlify 공식답변으로는 HTTPS를 강제적으로 끌 수 없기에 해결책은 서버에 SSL인증을 받아 HTTPS로 바꿔야 했다. 하지만 공유책방은 서비스의 메인기능을 담당하는 메인서버와 책 추천을 위한 추천시스템 서버와 통신하였기에 비용적인 문제를 이유로 보류하였다.

새로운 해결책을 찾아보던중 Netlify의 공식 문서에서 해답을 찾았다. 이는 리다이렉트 경로를 설정하여 모든 요청을 브라우저에서 추가로 연결하지 않고, `CDN서버`에서 바로 프록시 시키는 방식을 사용해 HTTP서버와 통신을 가능하게 하는 것이다. 이 방법을 사용하여 배포환경에서의 서버통신을 가능하게 하였다. 아래는 해답을 얻은 공식문서의 내용과 수정한 코드 샘플이다.

![image](https://user-images.githubusercontent.com/90181028/205478527-2d014cbe-5de1-47a5-b004-9afb4015d6d7.png)

- Netlify의 공식 문서 일부

```bash
# sample 1
/api/* http://43.200.171.144:8080/:splat 200
```

```JavaScript
// sample 2

// 변경 전
axios({
    method: "post",
    url: `http://43.200.171.144:8080/user/signup`,
    data: signUpData,
})

// 변경 후
axios({
    method: "post",
    url: `api/user/signup`,
    data: signUpData,
})
```

## 8.2. 성능관리 - 이미지 최적화

웹사이트의 성능저하는 곧 사용자의 사용성 하락과 더불어 우리 서비스를 이탈하게 된다. 이를 방지하기 위하여 공유책방의 지속적으로 성능측정 및 개선작업을 진행하였다. 사이트의 성능 확인은 아래 3가지 방법으로 측정 및 문서화하였다.

- Chrome DevTools: SHOW FPS
- Chrome DevTools: Lighthouse
- Chrome DevTools: Performance Tab & Network Tab

### 8.2.1. 문제정의

공유책방의 성능을 높인 사례 중 이미지 최적화를 통해 42.6 fps에서 58.2fps로 발전시킨 사례가 있다. FPS란 초당 프레임 수로 성능 지표의 가장 기본지표이다. 사용자들은 평균 60fps를 유지해야 동작에 불만을 느끼지 않는다. 하지만 공유책방의 개발환경과 배포환경에서 특정 페이지에 프레임의 손실(42fps)이 지속적으로 발생하였다.

### 8.2.2. 원인

이러한 현상의 공통점은 이미지가 많은 부분에서 발생한다는 것이었다. 실제 통계자료를 살펴보면 웹페이지에서 대부분의 용량을 차지하는 것은 이미지이다. 공유책방의 경우 이미지를 디자인적인 요소로 많이 활용하는데, jpg 파일의 특성상 실제 사이즈보다 크게 사용하는 경우 화질의 저하로 이어진다. 이러한 점을 고려하여 원본사이즈(2000px 이상)를 사용하였고, 자연스럽게 사이트의 성능을 저하시키는 요인으로 작용하였다.

![image](https://user-images.githubusercontent.com/90181028/205478574-9813f243-6b34-47d2-a31f-b098591e8876.png)

- 웹 리소스 통계 자료

### 8.2.3. 해결

이미지가 사용되는 카드 & 배너의 사이즈를 모두 측정하여 이미지의 사이즈를 적합하게 조절하는 최적화 작업을 진행하였다. 하나의 카드는 데스크탑과 태블릿, 모바일에서 환경에 따라 사이즈가 변할 수 있다. 이러한 상황을 모두 고려하여 하나의 이미지에 작은 버전과 큰 버전 두가지 모두 소스에 올려 사용자가 어떤 환경에서 접근하든 적당한 이미지의 결과를 출력되게 하였다.

또한 이미지들을 최초 렌더링 때 모두 preload하여 캐시에 담아두는 “image-preloading” 방식을 적용하였다. 이를 통해 사용자의 페이지 이동에 따른 loss를 최소화할 수 있다.

이미지 최적화 작업을 하며 사용자가 화질 저하와 성능 저하없이 서비스를 사용할 수 있게 하고, 프레임 수는 42fps에서 58.2fps로 상승, 이미지의 다운로드 시간도 134ms에서 11ms로 빨라진 것을 확인할 수 있었다.

![image](https://user-images.githubusercontent.com/90181028/205478580-14f5cd04-5b16-4c41-a1c5-d3b994110996.png)

- 공유책방 이미지 최적화 전, 후 FPS

| type | before image | after image |
| ---- | ------------ | ----------- |
| FPS  | 42.6 fps     | 58.2 fps    |
| size | 2.3 MB       | 146 KB      |
| time | 134 ms       | 11 ms       |

# 9. DIRECTORY

```bash
├── public
├── src
│   ├── lib
│   │    ├── api # 서버 통신 함수 폴더
│   │    ├── hooks # 커스텀 훅 폴더
│   │    ├── services.js # 외부 api 함수
│   │    ├── statics.js # 정적 파일
│   │    ├── styles.js # 스타일링 관련
│   │    └── utils.js # 유틸 함수
│   ├── assets # css, images
│   ├── pages # 페이지 관리
│   ├── containers # 상태 관리
│   ├── components # 컴포넌트
│   ├── App.js
│   └── index.js
└── ....etc
```

# 10. DEMO

<div align="center">
<img src="https://user-images.githubusercontent.com/90181028/206190290-ae029e91-c3ae-405b-9007-75417c450482.gif" width="98%">
<img src="https://user-images.githubusercontent.com/90181028/206197843-0e32af37-551f-4e48-9fca-92806fb6ce80.gif" width="98%">
<img src="https://user-images.githubusercontent.com/90181028/206196901-0de37c9c-1239-4c33-82f9-21d3a5cad484.gif" width="49%">
<img src="https://user-images.githubusercontent.com/90181028/206198670-cff6e98d-aded-4c3e-a75f-74df74b1e570.gif" width="49%">
<img src="https://user-images.githubusercontent.com/90181028/206200013-f3091072-9e7a-4919-aa0b-5a905b748ef9.gif" width="49%">
<img src="https://user-images.githubusercontent.com/90181028/206202669-b8d47340-6d4c-45f4-bbfd-289a26e63d5b.gif" width="49%">
<img src="https://user-images.githubusercontent.com/90181028/206859023-9e57f872-126f-40fe-a64d-5a535f4f6506.gif" width="49%">
</div>
