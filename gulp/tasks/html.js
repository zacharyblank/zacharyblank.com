module.exports = function(config) {
	var gulp = require('gulp'),
		htmlmin = require('gulp-htmlmin'),
		bytediff = require('gulp-bytediff'),
		runSequence = require('run-sequence');

	gulp.task('html', function() {
		return gulp.src(config.html.src)
	    	.pipe(bytediff.start())
	        .pipe(htmlmin({
	        	ignoreCustomFragments: [ /\{\{[\s\S]*?\}\}/ ],
	            removeComments: true,
	            collapseInlineTagWhitespace: false,
	            collapseWhitespace: true
	            // spare: true,
	            // empty: true,
	            // quotes: true
	        }))
			.pipe(bytediff.stop())
	        .pipe(gulp.dest(config.build))
	})	

}