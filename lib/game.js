var BaseGame = require('chesslib').Game;
var inherits = require('util').inherits;

module.exports = Game;

inherits(Game, BaseGame);

function Game(position, tags) {
  BaseGame.call(this, position, tags);
}

BaseGame.prototype.join = function join(color, nick) {
  if (nick == null) {
    nick = 'anonymous';
  }
  this.tags[color] = nick;
}
