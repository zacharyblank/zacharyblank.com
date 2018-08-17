module.exports = function($scope, $rootScope, $state, project) {

	$scope.toggleResume = function() {

		if (project.showing) {
			project.close();
		} else {
			$rootScope.resume = !$rootScope.resume;
		}
	}

	$scope.open = function(projectName) {
		$state.go('home.project', {
			project: projectName
		})
	}
}