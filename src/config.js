module.exports = function ($qProvider, $compileProvider) {
    $qProvider.errorOnUnhandledRejections(false);
	$compileProvider.debugInfoEnabled(false);
	$compileProvider.commentDirectivesEnabled(false);
	$compileProvider.cssClassDirectivesEnabled(false);
}