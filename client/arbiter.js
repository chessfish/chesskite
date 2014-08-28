var inherits = require('util').inherits;
var assign = require('lodash.assign');
var Kite = require('kite');
var Game = require('./game.js');

module.exports = Arbiter;

inherits(Arbiter, Kite);

function Arbiter(options) {
	this.seekDefaults
		= options.seekDefaults != null ? options.seekDefaults : {};
	Kite.call(this, options);
}

Arbiter.prototype.seek = function (options) {
	var arbiter = this;
	return arbiter.tell('seek', [assign({}, this.seekDefaults, options)]).
		then(function (pairing) {
			return arbiter.tell('join', [pairing]).
				then(function (game) {
					return new Game(arbiter, null, {
						gameId: pairing.gameId,
					});
				});
		});
};


[
	'join',
	'abort',
	'move',
	'resign',
	'offerDraw'
].
forEach(function (method) {
	Arbiter.prototype[method] = function () {
		return this.tell(method, [].slice.call(arguments));
	};
});
