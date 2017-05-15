module.exports = function(config) {
	var nodemon = require('gulp-nodemon');
	var gulp = require('gulp');
	var runSequence = require('run-sequence');
	
	gulp.task('server', function(callback) {
		runSequence('nodemon', 'browserSync', callback);
	});

	gulp.task('browserSync', function() {
	    return process.browserSync.init({
	        proxy: "localhost:" + config.server.port
	    });
	});

	gulp.task('nodemon', function(callback) {
	    nodemon({
	        script: 'server.js',
	        ext: 'js',
	        ignore: [config.src, config.build, './gulp', './gulpfile.js'],
	        env: {
	            'NODE_ENV': 'development',
	            'NODE_PORT': config.server.port,
	        }
	    }).on('start', function() {
	    	callback();
	    })
	});
}