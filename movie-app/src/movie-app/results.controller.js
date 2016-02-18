angular.module('mainMovieApp')
    .controller('ResultsController',['$scope', function (ioScope) {
        //ioScope will refer to $scope

        ioScope.results = [];
        ioScope.results.push({data: { Title :'Star Wars: Episode IV - A New Hope'}});
        ioScope.results.push({data: { Title :'Star Wars: Episode V - The Empire Strikes Back'}});
        ioScope.results.push({data: { Title :'Star Wars: Episode VI - Return of the Jedi'}});

    }]);
