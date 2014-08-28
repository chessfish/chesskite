var uuid = require('uuid');
var Promise = require('bluebird');

var seeks = [];

module.exports = function seek(options) {
	console.info('seek requested');
	// ignore all options, dead simple seek mechanism, blindly pairing seeks.
	return new Promise(function (resolve) {
		if (seeks.length > 0) {
			var gameId = uuid.v4();
			var lucky = Math.random() > .5;
			console.info('pairing: ' + gameId);
			// pair them by giving them both the same gameId:
			resolve({
				gameId: gameId,
				color: lucky ? 'white' : 'black'
			});
			seeks.shift()({
				gameId: gameId,
				color: lucky ? 'black' : 'white'
			});
		}
		else {
			seeks.push(resolve);
		}
	});
}
