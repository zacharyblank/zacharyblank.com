var fs = require('fs');
var path = require('path');
process.browserSync = require('browser-sync').create();
var tasks = './gulp/tasks';

fs.readdirSync(tasks).filter(function(file) {
	return /(\.(js)$)/i.test(path.extname(file));
}).map(function(file) {
	require(path.resolve(tasks, file))(require('./gulp/config'));
});
