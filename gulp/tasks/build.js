module.exports = function() {
	process.optamize = true;

	require('gulp').task('build', ['build-scripts', 'assets', 'html', 'build-styles']);
}