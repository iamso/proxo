#! /usr/bin/env node

const colors = require('colors');
const ifaces = require('os').networkInterfaces();
const cp = require('copy-paste');
const proxo = require('../index');

const argv = require('optimist').argv;
const port = process.env.PORT || argv.p || argv._[1] || 0;
const host = (argv.h || argv._[0] || 'localhost');

const callback = (host, port) => {
  let message = `\nProxy for ${colors.underline(host)}:\n\n`;
  let ip;
  let internal;
  let external;

  Object.keys(ifaces).forEach(dev => {
    ifaces[dev].forEach(details => {
      if (!ip && details.family === 'IPv4' && !details.internal) {
        ip = details.address;
      }
    ;
    });
  });

  internal = `http://localhost:${port}`;
  external = `http://${ip}:${port}`;
  message += colors.bold(`internal: ${colors.green(internal)}\n`);
  message += colors.bold(`external: ${colors.green(external)}\n`);
  message += `\nPress Ctrl+C to exit`;
  cp.copy(external);
  console.log(message);
}

proxo(host, port, callback);
