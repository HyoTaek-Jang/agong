# 작업일지

## 21년 1월 25일

- 카카오톡 채널 생성 및 프로필, 배경사진 제작
- 왜 배경사진이 이상하게 들어가는지 노이해...
- 각 사용자가 키워드를 추가하면 그 키워드에 대한 공지사항을 알려주는 어플
- 오픈 빌더 신청
- 피들러로 뜯어보니까 제목이랑 링크는 b-title-box 클래스에 담겨있음.
- https://www.ajou.ac.kr/kr/ajou/notice.do 페이지 응답에는 10개씩!

- express myapp을 했는데 vulnerabilities가 떳다.

  - 확인하니 jade에서 발생. 찾아보니 jade는 예전 버전이고 지금은 pug로 개명됐다 한다.
  - 하튼 걍 express myapp --view=ejs로 뷰 단을 그냥 애초에 ejs로 시작해버림

- request get에서 문제 발생 unable to verify the first certificate

  - https 인증서를 사용할 수 없다는 그런 뜻?
  - 해결법 1 : 옵션으로 {rejectUnauthorized: false} 넣어줌
  - 해결법 2 : 모듈 열리는 곳에 process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; 삽입

- 해결법 2와 헤더에 user-agent 넣어주는 것으로 공지사항 html 불러오기 성공

- html에서 클래스로 데이터 빼와서 제목이랑 글 번호, 주소 빼오기 도전!
- 처음엔 node-html-parser를 썻는데. cheerio가 더 난듯

- 데이터 가져오기

  - cheerio를 통해 제이쿼리 용법을 사용 가능하게함
  - const $ = cheerio.load(body)로 $선언하고 이후 제이쿼리처럼 $ 가지고 사용하면 됨
  - 이번 경우엔 .each함수로 배열을 처리하고 text()로 innerHTML을 가져옴
  - 그 다음 공백 문자가 너무 많아. trim()으로 공백을 제거.
  - 요소의 attribute는 .attr("~")로 해결
  - 링크는 href 앞에 아주대 공지사항 도메인 주소를 넣어 해결

- 디비설계, erd, 요구사항 정리, 기획 이런부분을 해야할듯 이제

## 21년 1월 26일

- 크롤링 구현 완료
- 웹페이지에 p태그로 띄우며 체크
- data라는 객체에 배열로 저장
- 나중에 카톡 메시지로 배포할땐 shortend link로 주는게 좋겠당
- 자동 크롤링은 크론탭을 활용해서 해결하는 쪽으로 생각해보자
- 메시지 쏘는건 event api가 있넹 유료긴한데 뭐...

## 21년 2월 9일

- 오픈빌더 승인 완료.
- 서버구축 시작.
- ec2로 서버 만들고 퍼티로 우분투 키고 mysql이랑 노드 설치

### mysql 설치

- https://luji.tistory.com/7?category=734037
- 로컬에 agong 디비 만들고 그 디비에 접근 할 수 있는 agongMaster 라는 유저 생성 후, 권한 줌

### node 설치

- https://soojae.tistory.com/25

### 노드 업데이트

- https://velog.io/@re_brother/TIL-Node.js-Version-Update-for-Ubuntu-May-13-2020
- nvm 사용법
- https://calvinjmkim.tistory.com/22

### sql, 워크벤치 연결

- https://devkingdom.tistory.com/84
- 쓰읍 왜 외부 연결이 안되지..
- 차선책으로 rds 사용?

### mysql 외부 접속 문제

- 그 사용자에게 외부 접속 가능하게 해줘야함
- root는 기본적으로 로컬호스트로 돼있음
- https://galid1.tistory.com/349
