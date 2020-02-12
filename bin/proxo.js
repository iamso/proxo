#! /usr/bin/env node

require('win-ca');
require('mac-ca');
const colors = require('colors');
const ifaces = require('os').networkInterfaces();
const cp = require('copy-paste');
const qrcode = require('qrcode-terminal');
const proxo = require('../index');

const argv = require('optimist').argv;
const port = process.env.PORT || argv.p || argv._[1] || 0;
const host = (argv.h || argv._[0] || 'localhost');

const callback = (host, port) => {
  let ip;

  Object.keys(ifaces).forEach(dev => {
    ifaces[dev].forEach(details => {
      if (!ip && details.family === 'IPv4' && !details.internal) {
        ip = details.address;
      }
    ;
    });
  });

  const internal = `http://localhost:${port}`;
  const external = `http://${ip}:${port}`;

  qrcode.generate(external, {small: true}, qr => {
    let message = `\nProxy for ${colors.underline(host)}:\n\n`;
    message += colors.bold(`internal: ${colors.green(internal)}\n`);
    message += colors.bold(`external: ${colors.green(external)} ${colors.reset.dim('(copied to clipboard)')}\n`);
    message += qr;
    message += `\nPress Ctrl+C to exit`;
    console.log(message);
    cp.copy(external);
  });
}

proxo(host, port, callback);
