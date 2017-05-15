module.exports = function(config) {
	require('uglifyify');

	var gulp = require('gulp'),
    	bro = require('gulp-bro'),
	    stringify = require('stringify');

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

}