var Promise = require('bluebird');
var Game = require('./game');

module.exports = Join;

var games = {};

function Join(options) {
	return new Promise(function (resolve) {
		var game = (
			games[options.gameId] != null ?
			games[options.gameId] :
			new Game(null, { gameId: options.gameId })
		);
		game.join(options.color, options.nick);
		resolve();
	});
}
