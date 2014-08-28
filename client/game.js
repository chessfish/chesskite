var Promise = require('bluebird');
var BaseGame = require('chessview').Game;
var inherits = require('util').inherits;
var wrap = require('lodash.wrap');

module.exports = Game;

inherits(Game, BaseGame);

function Game(arbiter, position, tags) {
	BaseGame.call(this, position, tags);
	this.arbiter = arbiter;
}

Game.prototype.move
	= Promise.method(wrap(Game.prototype.move, function (move, moveNotation) {
	move.call(this, moveNotation);
	return this.arbiter.move({
		gameId: this.tags.gameId,
		moveNotation: moveNotation
	});
}));
