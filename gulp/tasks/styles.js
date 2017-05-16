module.exports = function(config) {
	var gulp = require('gulp'),
	    less = require('gulp-less'),
	    cleanCSS = require('gulp-clean-css'),
	    LessPluginNpmImport = require("less-plugin-npm-import"),
	    plumber = require('gulp-plumber'),
		runSequence = require('run-sequence'),
		bytediff = require('gulp-bytediff'),
	    sourcemaps = require('gulp-sourcemaps');

	gulp.task('styles', function() {
		return gulp.src(config.styles.entrypoint)
	        .pipe(plumber({
	            errorHandler: function(err) {
				    console.error(err.message);
				}
	        }))
	        .pipe(sourcemaps.init())
	        .pipe(less({
	            plugins: [new LessPluginNpmImport()]
	        }))
	        .pipe(sourcemaps.write())
	        .pipe(gulp.dest(config.build + '/styles'))
	        .pipe(process.browserSync.stream());
	});

	gulp.task('minify-styles', function() {
	    gulp.src(config.build + '/styles/index.css')
	    	.pipe(plumber())
	    	.pipe(bytediff.start())
	    		.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(bytediff.stop())
			.pipe(plumber.stop())
			.pipe(gulp.dest(config.build + '/styles/'));
	});

	gulp.task('build-styles', function(callback) {
		runSequence('styles', 'minify-styles', callback);
	});	
}