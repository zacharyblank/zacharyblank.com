module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false // Test will break if this is not here.
    }).hashPrefix('!')

    $urlRouterProvider.otherwise(function($injector, $location) {
        var $state = $injector.get('$state');
        $state.go('default.404', null, {
            location: false
        });

        return $location.path();
    });
    
    // $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        views: {
            primary: {
                templateUrl: '/html/home.html',
                controller: 'Home'
            }
        }
    })

    .state('home.project', {
        url: '{project}',
        onEnter: function(project, $stateParams, $rootScope) {
            $rootScope.resume = true;
            
            project.open({
                projectName: $stateParams.project
            })
        }
    })

    $stateProvider.state('404', {
        views: {
            primary: {
                templateUrl: '/html/views/404.html',
            }
        }
    })
}