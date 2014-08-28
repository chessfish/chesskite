var KiteServer = require('kite.js/server');
var SockJsServer = require('kite.js/lib/kite-server/sockjs/server.js');

var arbiter = new KiteServer({
	name: 'chesskite',
	username: 'chess',
	environment: 'public',
	region: 'aws',
	version: '1.0.0',
	serverClass: SockJsServer,
	api: require('./lib/api.js'),
	prefix: '/arbiter',
	auth: false,
});

arbiter.listen(5647);
