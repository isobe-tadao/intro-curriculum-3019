'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(302, {
    'Lccation': 'http://www.nicovideo.jp/'
  });
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});

