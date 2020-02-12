const http = require('http');
const request = require('request');

module.exports = (host, port, callback) => {
  if (!/^http(s)?:\/\//i.test(host)) {
    host = `http://${host}`;
  }

  const server = http.createServer((req, res) => {
    if (host) {
      req.pipe(request(host + req.url)).pipe(res)
    }
    else {
      res.writeHead(404);
      res.end('Not found');
    }
  }).listen(port, () => {
    callback && typeof callback === 'function' && callback(host, server.address().port);
  });
};
