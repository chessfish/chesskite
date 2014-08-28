var ecstatic = require('ecstatic');
var http = require('http');

http.createServer(ecstatic({root: __dirname + "/static"})).listen(1337);
console.log('server listening on http://0.0.0.0:1337')