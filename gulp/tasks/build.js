module.exports = function() {
	process.optamize = true;

	require('gulp').task('build', ['scripts', 'assets', 'html', 'styles']);
}