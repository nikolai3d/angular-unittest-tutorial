angular.module('mainMovieApp', ['ui.bootstrap', 'ngRoute', 'omdb'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/results', {
                templateUrl: 'movie-app/results.html',
                controller: 'ResultsController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
