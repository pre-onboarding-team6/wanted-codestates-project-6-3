# [**Project 2**] 로그프레소 - 듀얼셀렉터

## 🔗 배포 주소

- 아래 URL을 클릭하면 배포된 페이지로 이동합니다.
    
    [https://logpresso-dualselector.netlify.app/](https://logpresso-dualselector.netlify.app/)
    

<br>

## **⚙**개발 환경
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">



<br>

## 📝**명세 분석**

[https://www.notion.so/2-64f4df5cb2014f8d909b654bb278b06a#7ed777bad004420a84efcaa95126e0bf](https://www.notion.so/2-64f4df5cb2014f8d909b654bb278b06a)

<br>

## 🧑 참여 멤버

- 손한빈: 전체 스타일 구현 및 리팩토링
- 김도연 : 아이템 순서 이동 구현
- 정규용: 아이템 순서 이동 구현
- 유혜정: 소메뉴 기능 구현
- 유지수 : 아이템 이동 버튼 및 다중 선택 구현
- 박세은 : 아이템 이동 버튼 구현

<br>

## 🕹 설치 및 시작방법

```
# install dependencies
 $ npm install

# serve with hot reload at localhost:3000
 $ npm start
```

<br>

## 🖥️ 구현 목록

### 📌 아이템 순서 이동

- 드래그앤드롭으로 아이템의 순서 변경

![순서이동](https://user-images.githubusercontent.com/81206124/155655046-982f0e25-b037-49b9-8f3b-32a57a63f674.gif)


### 📌 **다중 선택**

- Shift키를 누르면 시작부터 끝까지 선택됨
- Ctrl키를 누르면 동시에 다중 선택 가능

![다중선택](https://user-images.githubusercontent.com/81206124/155655034-1c9c868c-0d58-4c45-8120-bf6a07862f3a.gif)


### 📌 아이템 이동버튼

- 초기화
- 모든 아이템 이동
- 선택된 아이템만 이동

![아이템이동](https://user-images.githubusercontent.com/81206124/155655128-a0e805d7-b7e3-4bca-bcea-8c9d69340712.gif)

### 📌 검색

- 엔터를 누르면 텍스트가 포함된 모든 아이템을 나열

![검색기능](https://user-images.githubusercontent.com/81206124/155654848-faf8a9d3-7a17-4f39-85de-4e0d78263486.gif)

### 📌 **소메뉴**

- 타이틀 제목 수정
- 하나씩만 옮기기 → 다중선택 불가
- 아이템 크기 조절
- 영역 크기 조절

![소메뉴](https://user-images.githubusercontent.com/81206124/155668893-d30051e4-8bcb-4c3f-bbbf-c7deff2d0eae.gif)


<br>

## 🗂 프로젝트 구조
```
📁src
│  App.js
│  constances.js
│  index.css
│  index.js
│  
├─📁components
│	│ Button.js
│	│ Input.js
│	│ ListItem.js
│	│ Popover.js
│	│ Radio.js
│	│ Selector.js
│	│ Setting.js
│	│ StackedList.js
│       │ Title.js
│       └─Toggle.js
│              └─📁icons
│
├─📁hooks
│      useDragAndDrop.js
│
└─📁utils
	moveItems.js
```
