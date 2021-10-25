# 설정 가이드
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

# package.json script 가이드
    * npm run seeder:config -> seed 데이타 생성
    * npm run release       -> CHANGELOG.md git history 생성


## 개발 가이드

# mariadb 설치
    * db명, 아이디, 패스워드 : dalrise 고정
    * 도커 방식
      * docker pull mariadb
        docker run --name mariadb -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=mariadb mariadb
        apt-get update && apt-get install nano vim

        /etc/mysql/my.cnf

        [client]
        default-character-set = utf8mb4

        [mysql]
        default-character-set = utf8mb4

        [mysqld]
        character-set-client-handshake = FALSE
        character-set-server = utf8mb4
        collation-server = utf8mb4_unicode_ci

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



