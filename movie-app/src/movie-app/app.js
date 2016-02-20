angular.module('mainMovieApp', ['ui.bootstrap', 'ngRoute', 'omdb', 'movieCore', 'ngMockE2E'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'movie-app/home.html',
                controller: 'HomeController'
            })
            .when('/results', {
                templateUrl: 'movie-app/results.html',
                controller: 'ResultsController'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(function ($logProvider) {
        $logProvider.debugEnabled(false);
    }).run(['$httpBackend', function (iFakeBackendServer){
        var data = {fPopularResults: ['tt0076759', 'tt0080684','tt0086190']};
        //For some reason, pure array return causes Angular Resource thingie to complain.
        
        var headers = {
            headers: {'Content-Type': 'application/json'}
        };

        iFakeBackendServer.whenGET(function (s) {
            return (s.indexOf('popular') !== -1);
        }).respond(200, data, headers);

        //Only intercept and fake the 'popular' requests, let everything else pass through.
        iFakeBackendServer.whenGET(/.*/).passThrough();
    }]);
