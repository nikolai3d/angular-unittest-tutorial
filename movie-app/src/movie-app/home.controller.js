angular.module('mainMovieApp')
    .controller('HomeController', ['$scope', '$interval', function ($scope, $interval) {
        var expectedResults = [{
            "Title": "Star Wars: Episode IV - A New Hope",
            "imdbID": "tt0076759"
        }, {
            "Title": "Star Wars: Episode V - The Empire Strikes Back",
            "imdbID": "tt0080684"
        }, {
            "Title": "Star Wars: Episode VI - Return of the Jedi",
            "imdbID": "tt0086190"
        }];

        $scope.result = expectedResults[0];

        var fCurrentCarouselIndex = 0;

        $interval(function () {
            ++fCurrentCarouselIndex;
            $scope.result = expectedResults[fCurrentCarouselIndex % expectedResults.length];
        }, 5000);
    }]);
