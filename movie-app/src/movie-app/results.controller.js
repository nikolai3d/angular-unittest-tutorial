angular.module('mainMovieApp')
    .controller('ResultsController',['$scope', '$location', 'omdbApi', function (ioScope, iLocation, iOMDBAPI) {
        //ioScope will refer to $scope

        //Mock results, not actually using the API:
        // ioScope.results = [];
        // ioScope.results.push({data: { Title :'Star Wars: Episode IV - A New Hope'}});
        // ioScope.results.push({data: { Title :'Star Wars: Episode V - The Empire Strikes Back'}});
        // ioScope.results.push({data: { Title :'Star Wars: Episode VI - Return of the Jedi'}});

        //API call
        iOMDBAPI.search('star wars')
            .then(function (data) {
                ioScope.results = data.Search;
        })

    }]);
