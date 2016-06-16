(function(){
  'use strict';

  module.exports = exports = (function() {
    var http = require('http');
    var request = require('request');
    return function(host, port, callback) {
      if (!/^http(s)?:\/\//i.test(host)) {
        host = `http://${host}`;
      }
      var server = http.createServer(function(req, res) {
        if (host) {
          req.pipe(request(host + req.url)).pipe(res)
        }
        else {
          res.writeHead(404);
          res.end('Not found');
        }
      }).listen(port, function() {
        callback(host, server.address().port);
      });
    };
  })();

})();
