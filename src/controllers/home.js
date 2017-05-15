module.exports = function($scope, $rootScope, $state) {

	$scope.toggleResume = function() {
		$rootScope.resume = !$rootScope.resume;
	}

	$scope.open = function(projectName) {
		$state.go('home.project', {
			project: projectName
		})
	}
}