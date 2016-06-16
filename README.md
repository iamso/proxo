# Proxo

A (very simple) proxy server.


## Installation

### As package
```bash
npm install proxo
```

### As command line tool
```bash
npm install -g proxo
```

## Usage

### As package
```javascript
var proxo = require('proxo');
proxo(host, port, callback);
```
This starts the proxy server for the specified host from the specified port, calling the specified callback after initiliasing.

#### proxo(host, port, callback)

Only the host must be passed to the constructor. The other parameters are optional, but they have to be passed in the right order, meaning that if you want to pass a callback, you have to pass a port (or NULL).

| Parameter | Description |
| --- | --- |
| host | The host to send the request to. |
| port ***(optional)*** | The port to listen on the proxy server. |
| callback ***(optional)*** | The callback to call after initialising. |


### As command line tool
```bash
proxo -h some-vhost.local -p 1234
# or
proxo some-vhost.local 1234
```
This starts the proxy server for the specified host from the specified port.

The arguments are optional. If you don't pass a host, the host will be `localhost` and if you don't pass a port, the port will be a random free port.

If you're not using named arguments, the order is important: first the host, then the port.

If you're using named arguments, use the following in any order:

| Argument Name | Description |
| --- | --- |
| `-h` | The host to send the request to. |
| `-p` | The port to listen on the proxy server. |


## License
Copyright (c) 2016 Steve Ottoz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
