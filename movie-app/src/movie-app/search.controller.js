
var controllerPrototype = function (iScope, iLocation) {
    //iScope will refer to $scope
    iScope.search = function () {
        if (iScope.query) {
            //iLocation will refer to injected Angular $location service
            iLocation.path('/results').search('q', iScope.query);
        }
    }
};

angular.module('mainMovieApp', [])
    .controller('SearchController',['$scope','$location', controllerPrototype]);
