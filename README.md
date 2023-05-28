# trelloo

### 목차

- Overview
- Tech stack
- Getting started
- Description
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

<br>

run test

```js
yarn test
yarn run cypress open
```

<br>

start storybook

```js
yarn storybook
```

<br>

Published Links

- [Storybook](https://64187d30417c706e850654d5-pbqcfkgiqy.chromatic.com/?path=/story/components-board--default)

- [Chromatic](https://www.chromatic.com/build?appId=64187d30417c706e850654d5&number=11)

<br>
<br>

### Description

---

| 카드 조회                                                                                                                | 로그인 페이지 리다이렉트                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| 카드 조회 요청 실패 시 error fallback UI 표시                                                                            | 401 에러 발생시 로그인 페이지 리다이렉트                                                                                 |
| ![ezgif com-video-to-gif (1)](https://github.com/f-lab-edu/trelloo/assets/67543454/3e70d6c0-95b6-4d79-841b-67fc074d41e7) | ![ezgif com-video-to-gif (2)](https://github.com/f-lab-edu/trelloo/assets/67543454/177f7e10-41a0-4bcc-866b-eb3395791d43) |

| 카드 수정, 삭제, 추가                                                                                                    | 카드 목록 수정, 삭제, 추가                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| ![ezgif com-video-to-gif (6)](https://github.com/f-lab-edu/trelloo/assets/67543454/4b802776-5d2b-482f-b4fa-cc8697896957) | ![ezgif com-video-to-gif (5)](https://github.com/f-lab-edu/trelloo/assets/67543454/0b8a0fd8-4c23-4b4e-995b-4eceddd5df5a) |

| 드래그앤 드랍                                                                                                            | 모달                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| ![ezgif com-video-to-gif (4)](https://github.com/f-lab-edu/trelloo/assets/67543454/59e649da-3c56-4994-a1d2-7c7bf386d4f0) | ![ezgif com-video-to-gif (3)](https://github.com/f-lab-edu/trelloo/assets/67543454/edd2e54c-7dea-47ca-a5cf-3fb6582f43c9) |

<br>
<br>

### Point

---

- 다중 모달 구현
- 공통 에러 처리
  - status code별 공통 에러처리 (default options)
  - detail code 염두에 두고 에러처리하기
- error-boundary와 suspense 사용
  - Skeleton UI 사용
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
