var Seek = require('./seek.js');
var Join = require('./join.js');

exports.seek = seek;
exports.join = join;
exports.abort = abort;
exports.move = move;
exports.resign = resign;
exports.offerDraw = offerDraw;

function seek(options, callback) {
  Seek(options).nodeify(callback);
}

function join(options, callback) {
  Join(options).nodeify(callback);
}

function abort(options, callback) {
  Abort(options).nodeify(callback);
}

function move(options, callback) {
  Move(options).nodeify(callback);
}

function resign(options, callback) {
  Resign(options).nodeify(callback);
}

function offerDraw(options, callback) {
  OfferDraw(options).nodeify(callback);
}