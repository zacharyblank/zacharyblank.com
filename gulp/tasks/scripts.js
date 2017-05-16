module.exports = function(config) {
	require('uglifyify');

	var gulp = require('gulp'),
    	bro = require('gulp-bro'),
    	uglify = require('gulp-uglify'),
		runSequence = require('run-sequence'),
		plumber = require('gulp-plumber'),
		ngAnnotate = require('gulp-ng-annotate'),
		bytediff = require('gulp-bytediff'),
	    stringify = require('stringify');

	gulp.task('build-scripts', function(callback) {
		runSequence('scripts', 'minify-scripts', callback);
	});

    gulp.task('watch-scripts', ['scripts'], function(done) {
    	process.browserSync.reload();
    	done();
    })

	gulp.task('scripts', function() {
		var transforms = [
            ['stringify', {
            	global: true,
				appliesTo: { includeExtensions: ['.html',] }
            } ],
        ]

	    return gulp.src(config.scripts.entrypoint, { read: false })
	        .pipe(bro({
	            insertGlobals: true,
	            transform: transforms,
	            debug: true
	        }))
	        .pipe(gulp.dest(config.build))
	});

	gulp.task('minify-scripts', function() {
	    gulp.src(config.build + '/index.js')
	    	.pipe(plumber())
	    	.pipe(bytediff.start())
				.pipe(uglify({mangle: false}))
			.pipe(bytediff.stop())
			.pipe(plumber.stop())
			.pipe(gulp.dest(config.build));
	});

}