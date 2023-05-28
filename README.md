# trelloo

### 목차

- Description
- 기술스택
- 시작하기
- 기능 소개
- Point
- Convention

<br>
<br>

### Overview

---

트렐로를 모티브로 해 드래그앤 드랍이 가능한 칸반보드를 구현했습니다.

카드를 드래그해 카드목록에서의 위치를 변경할 수 있습니다.

각 카드와 카드목록을 추가, 수정, 삭제할 수 있습니다.

<br>
<br>

### Tech stack

---

<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&style=flat&logoColor=white"> 
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white&style=flat&border"> 
<img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white&style=plastic&border">
<img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&style=flat&logo=ReactQuery&logoColor=white&border">

<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white&style=flat&border"> <img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=Cypress&logoColor=white&style=flat&border"> <img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=Vitest&logoColor=white&style=flat&border"> <img src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&style=flat&logoColor=white&border">

<br>
<br>

### Getting started

---

start project

```js
yarn start
```

run test

```js
yarn test
yarn run cypress open
```

start storybook

```js
yarn storybook
```

Links

- [Storybook](https://64187d30417c706e850654d5-pbqcfkgiqy.chromatic.com/?path=/story/components-board--default)

- [Chromatic](https://www.chromatic.com/build?appId=64187d30417c706e850654d5&number=11)

<br>
<br>

### Description

---

#### 드래그앤 드랍

#### 카드 수정, 삭제, 추가

#### 카드 목록 수정, 삭제, 추가

#### 다중 모달

#### 로그인 페이지 리다이렉트

<br>
<br>

### Point

---

- 다중 모달 구현
- 공통 에러 처리
  - status code별 공통 에러처리 (default options)
  - detail code 염두에 두고 에러처리하기
- 공통 api fetching
  - fetch vs axios
  - fetch 어떻게 랩핑해 사용할까 (axios 흉내내기)
- 상태관리 전략
  - React Query
  - Context API
  - Redux?

<br>
<br>

### Convention

---

📘 [Commit convention](https://github.com/Gayun00/trelloo/wiki/Convention)
