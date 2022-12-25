# MSA-Auth-Server
### 스마일게이트 윈터데브캠프 개인프로젝트 - MSA기반 인증 서버 개발

MSA 아키텍처를 기반으로한 인증 서버입니다. <br>
프론트 : React (미 구현) <br>
백엔드 : Spring Boot(User 서버 + Order 서버 + Discovery 서버 + Gateway 서버)<br>
데이터베이스 : MySQL <br>
캐시 : Redis(미구현)<br>

## 아키텍처

![WinterDevSolo drawio (2)](https://user-images.githubusercontent.com/78259314/209460012-80e8ce79-b6bb-40b0-bc6c-e82a7638a86d.png)

User 서버 : 회원가입, 로그인 처리 <br>
Order 서버 : User 정보와 1:N 관계를 갖는 주문 정보를 처리<br>
Discovery 서버 : 각 서버들의 상태 정보를 처리<br>
Gateway 서버 : User서버, Order서버로 중계 역할 수행<br>

## 주요 요구 사항

1. 가입, 로그인 페이지
2. 유저 관리 페이지
3. 인증 서버 API
4. RDBMS DB 사용
5. Password Encryption

## 구현 상황

React를 활용한 프론트 엔드 개발 중 <br>
JWT 토큰 Refresh 토큰 관련 개발 중 <br>
+ 추가로 캐시 구현 고려 

## 궁금점
1. refresh 토큰의 경우 저장소에 저장해야 하는 것으로 알고 있는데 테이블을 따로 생성해서 사용하는 것인지
2. Redis를 사용하는 경우 refresh 토큰을 캐시에도 저장하고, DB에 테이블도 따로 만들어서 계속 동기화 하면서 운영하는 것인지

## API 명세

|URI|Method|설명|
|-----|---|-----|
|/user-service/health_check|GET|유저 서버 포트 정보|
|/user-service/users|GET|모든 유저 정보|
|/user-service/users|POST|회원가입|
|/user-service/users/{userId}|GET|특정 유저 정보|
|/user-service/login|POST|로그인|
|/order-service/health_check|GET|주문 서버 포트 정보|
|/order-service/{userId}/orders|GET|특정 유저 주문 정보|
|/order-service/{userId}/orders|POST|특정 유저 주문 등록|
