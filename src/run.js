module.exports = function($window, $transitions) {
	$window.ga('create', 'UA-99176129-1', 'auto');

    $transitions.onFinish({}, function(transition) {
		$window.ga('send', 'pageview');
    });
}