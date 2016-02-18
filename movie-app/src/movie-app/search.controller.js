
// var controllerPrototype = function (iScope, iLocation) {
//     //iScope will refer to $scope
//     iScope.search = function () {
//         if (iScope.query) {
//             //iLocation will refer to injected Angular $location service
//             iLocation.path('/results').search('q', iScope.query);
//         }
//     }
// };

//Another version uses 'this' to refer to the scope
var controllerPrototype = function (iLocation) {
    //iScope will refer to $scope
    this.search = function () {
        if (this.query) {
            //iLocation will refer to injected Angular $location service
            iLocation.path('/results').search('q', this.query);
        }
    }
};

angular.module('mainMovieApp')
    .controller('SearchController',['$location', controllerPrototype]);
