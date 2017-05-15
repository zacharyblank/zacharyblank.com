module.exports = function(modal) {
	return modal({
		controller: function($scope, $state, project, projectName, $timeout) {

			$scope.template = '/html/projects/' + projectName + '.html';

			$timeout(function() {
				$scope.show = true;
			}, 100);

			$scope.$on('$destroy', function() {
				$state.go('home');
			})

			$scope.close = function() {
				$scope.show = false;

				$timeout(function() {
					project.resolve();
				}, 850);
			}

		},
		// template: "<div></div>"
		template: require('../html/projects/project.html')
	});
}