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
