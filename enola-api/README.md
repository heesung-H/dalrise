## 프로젝트 생성
```bash
nest new enola-api

docker network create redis-net

docker run --name my-redis     -p 6379:6379   --network redis-net  -d redis:alpine redis-server --appendonly yes

docker run -it --network redis-net --rm redis:alpine redis-cli -h my-redis


```


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)


## docker-comnpose
 - 우선 docker desktop 설치. ( docker, docker-compose 사용 가능. 관리 화면에서 현재 docker에 올라가 있는 이미지도 함께 보여준다.)
 - docker-compose 전 docker에서 사용 할 이미지 다운로드.
 - docker pull mariadb
 - docker pull redis

 - docker 이미지 up 실행. 파일 위치 ./docker-compose.yml
 docker-compose -f docker-compose.yml up -d
 - docker 종료.
 docker-compose down
 - docker 실행
 docker-compose start

## License

Nest is [MIT licensed](LICENSE).
