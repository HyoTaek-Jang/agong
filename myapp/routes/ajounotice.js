const express = require("express");
const router = express.Router();
const request = require("request");
const cheerio = require("cheerio");
const template = require("../lib/template");

router.get("/", (req, response) => {
  let html;

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

    const data = { num: [], title: [], link: [], div: [] };

    $(".b-title-box a").each((index, item) => {
      data.title.push($(item).text().trim());
    });

    $(".b-title-box a").each((index, item) => {
      data.link.push(
        `https://www.ajou.ac.kr/kr/ajou/notice.do${$(item).attr("href")}`
      );
    });

    $(".b-num-box").each((index, item) => {
      data.num.push($(item).text().trim());
    });

    $(".b-cate").each((index, item) => {
      data.div.push($(item).text().trim());
    });
    console.log(data);
    html = template.html(data);
    response.send(html);
  });
});

module.exports = router;
