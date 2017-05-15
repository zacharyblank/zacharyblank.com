module.exports = function(config) {
	var gulp = require('gulp'),
	    less = require('gulp-less'),
	    LessPluginNpmImport = require("less-plugin-npm-import"),
	    plumber = require('gulp-plumber'),
	    sourcemaps = require('gulp-sourcemaps');

	gulp.task('styles', function() {
		gulp.src(config.styles.entrypoint)
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
}