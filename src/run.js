module.exports = function($window, $transitions, $location) {
	$window.ga('create', 'UA-99176129-1', 'auto');

    $transitions.onSuccess({}, function(transition) {
    	$window.ga('set', 'page', $location.path());
		$window.ga('send', 'pageview');
    });
}