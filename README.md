

# Enola

## 추천 vscode extensions 
    * Material Theme
    * Material Icon Theme
    * Prettier - Code formatter
    * ESLint
        - [가이드](https://github.com/standard/standard/blob/master/docs/RULES-kokr.md)
    * Markdown All in One
    * Hide Node Modules (node_modules 숨김 처리)
    
## editor 
    * [설치경로](https://github.com/tonsky/FiraCode)


## node 가이드
# yarn 사용
    * 윈도우에서 권한 문제가 있어
    * 관리자 권한 power shell -> Set-ExecutionPolicy RemoteSigned 실행

# typeorm
    * [한글사용가이드](https://typeorm.delightful.studio/index.html)

# Commits lint
    * 초기 설치
      yarn standard-version --first-releas

    * commit 메세지 강제
    -> feat(MINOR): 이용자단에 새로운 기능 추가, API 변경(하위 호환)
    -> fix(PATCH): Bug Fix, API 변경 사항 없이 내부 수정
    -> docs: 문서 수정/추가
    -> style: 포맷 수정 (e.g. 세미콜론 추가 등)
    -> refactor: 리팩토링 코드, 변수 명등 변경
    -> test: 테스트 코드 추가/수정
    -> chore: 그외 자잘한 수정 사항들

      - chore: run tests on travis ci
      - fix(server): send cors headers
      - feat(blog): add comment section

## app 생성

Run `nx g @nrwl/react:app my-app`


## library 생성

Run `nx g @nrwl/react:lib my-lib`


app 에서 library 사용
`@enola/mylib`.


## Development server

Run `nx serve api`

Run `nx serve question-app`


## 초기 설치  
    nx g @nrwl/nest:app api  
    nx g @nrwl/nest:lib core  
    nx g @nrwl/nest:lib auth  
    nx g @nrwl/nest:lib api-service  
    nx g @nrwl/nest:lib api-data

    nx g @nrwl/react:lib enola-ui
    nx g @nrwl/react:component board --project enola-ui


  # workspace 삭제
    nx g @nrwl/workspace:remove react-ui
    nx g @nrwl/workspace:remove core
    nx g @nrwl/workspace:remove question-app-e2e


## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.
