var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['browserify']);

gulp.task('browserify', function () {
	return (
		browserify().
		require('./client/arbiter.js', {
			expose: 'chesskite',
		}).
		external('kite').
		external('chessview').
		bundle().
		pipe(source('arbiter.js')).
		pipe(gulp.dest('static/browser'))
	);
});
