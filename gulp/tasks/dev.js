module.exports = function() {
	require('gulp').task('dev', ['server', 'scripts', 'assets', 'html', 'styles', 'watch']);
}