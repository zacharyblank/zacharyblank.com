module.exports = function(btfModal, $q, $rootScope, $timeout) {

	return function(options) {
        var deferred;

		var modal = btfModal(options);

		modal.resolve = function(value) {
			$rootScope.modal = false;
            
            deferred.resolve(value);
			
			modal.deactivate();
		}

		modal.reject = function(value) {
			$rootScope.modal = false;
            
            deferred.reject(value);
			
			modal.deactivate();
		}

		modal.open = function(scope) {
			var scope = scope || {};

			deferred = $q.defer();

			$rootScope.modal = true;

			modal.activate(scope).then(function() {
			}, function() {});
			

			return deferred.promise;
		}

		return modal;
	}
}