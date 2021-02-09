module.exports = {
  html: function (data) {
    console.log(data.num.length);
    let list = ``;
    for (let i = 0; i < data.num.length; i++) {
      list += `<p>${data.num[i]} | <a href="${data.link[i]}">${data.title[i]}</a> | ${data.div[i]} </p>`;
    }
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>
          ${list}
        </body>
        </html>`;
  },
};
