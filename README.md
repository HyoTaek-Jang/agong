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
