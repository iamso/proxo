#! /usr/bin/env node

var colors = require('colors');
var ifaces = require('os').networkInterfaces();
var proxo = require('../index');

var argv = require('optimist').argv;
var port = process.env.PORT || argv.p || argv._[1] || 0;
var host = (argv.h || argv._[0] || 'localhost');

function callback(host, port) {
  var message = `\nProxy for ${colors.underline(host)} from:\n\n`;
  Object.keys(ifaces).forEach(function (dev) {
    ifaces[dev].forEach(function(details) {
      if (details.family === 'IPv4' && !details.internal) {
        message += colors.green.bold(`${details.address}:${port}\n`);
      }
    });
  });
  message += `\nPress Ctrl+C to exit`;
  console.log(message);
}

proxo(host, port, callback);
