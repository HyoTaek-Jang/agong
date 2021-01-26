const express = require("express");
const router = express.Router();
const request = require("request");
const cheerio = require("cheerio");

router.use("/", (req, res, next) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  var options = {
    method: "GET",
    url: "https://www.ajou.ac.kr/kr/ajou/notice.do",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
    },
  };
  request(options, function (error, res, body) {
    if (error) throw new Error(error);
    //  이렇게 $에 html 문서를 담아야 제이쿼리처럼 사용가능
    const $ = cheerio.load(body);
    $(".b-title-box a").each((index, item) => {
      console.log($(item).text().trim());
    });

    $(".b-title-box a").each((index, item) => {
      console.log(
        `https://www.ajou.ac.kr/kr/ajou/notice.do${$(item).attr("href")}`
      );
    });

    $(".b-num-box").each((index, item) => {
      console.log($(item).text().trim());
    });

    $(".b-cate").each((index, item) => {
      console.log($(item).text().trim());
    });
  });
  next();
});

router.get("/", (req, res) => {
  res.send("ajou");
});

module.exports = router;

// module.exports = {
//   option: function (url, cookie, body) {
//     let option = {
//       method: "POST",
//       url: `${url}`,
//       headers: {
//         Host: "sugang.ajou.ac.kr",
//         Connection: "keep-alive",
//         Accept: "application/json, text/javascript, */*; q=0.01",
//         "X-Requested-With": "XMLHttpRequest",
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
//         "Content-Type": "application/json;charset=UTF-8",
//         Origin: "http://sugang.ajou.ac.kr",
//         Referer: "http://sugang.ajou.ac.kr/aply/index.action",
//         "Accept-Encoding": "gzip, deflate",
//         "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
//         Cookie: `${cookie}`,
//       },

//       body: JSON.stringify(body),
//     };
//     return option;
//   },

//   body: function (subj, security) {
//     let body = {
//       strTlsnNo: `${subj}`,
//       strSubmattFg: "",
//       strSustMjCd: "",
//       securityNumber: `${security}`,
//     };
//     return body;
//   },
// };
