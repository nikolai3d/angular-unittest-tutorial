var controllerPrototype = function (iScope, iTimeout, iLocation) {
    //iScope will refer to $scope
    var fTimeout;

    var CancelTimeout = function () {
        if (fTimeout) {
            iTimeout.cancel(fTimeout);
        }
    };
    iScope.keyup = function () {
        fTimeout = iTimeout(function () {
            iScope.search();
        }, 1000);
    };

    iScope.keydown = function () {
        CancelTimeout();
    };

    iScope.search = function () {

        CancelTimeout();
        if (iScope.query) {
            //iLocation will refer to injected Angular $location service
            iLocation.path('/results').search('q', iScope.query);
        }
    };
};

angular.module('mainMovieApp')
    .controller('SearchController', ['$scope', '$timeout', '$location', controllerPrototype]);
