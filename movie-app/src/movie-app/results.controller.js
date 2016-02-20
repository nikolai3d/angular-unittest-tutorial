angular.module('mainMovieApp')
    .controller('ResultsController', ['$scope', '$location', 'omdbApi', '$exceptionHandler', '$log', function (ioScope, iLocation, iOMDBAPI, iExceptionHandler, iLogService) {
        //ioScope will refer to $scope

        //Mock results, not actually using the API:
        // ioScope.results = [];
        // ioScope.results.push({data: { Title :'Star Wars: Episode IV - A New Hope'}});
        // ioScope.results.push({data: { Title :'Star Wars: Episode V - The Empire Strikes Back'}});
        // ioScope.results.push({data: { Title :'Star Wars: Episode VI - Return of the Jedi'}});

        //API call
        var query = iLocation.search().q; //Extracting query out of location, i.e. an URL

        iLogService.debug('Controller Loaded with Query: ', query);

        iOMDBAPI.search(query)
            .then(function (data) {
                iLogService.debug('Data Returned For Query: ', query, data);
                ioScope.results = data.Search;
            }).catch(function (e) {
                iExceptionHandler(e);
            });

        ioScope.expand = function expand(index, id) {
            iOMDBAPI.find(id).then(function (data) {
                ioScope.results[index].data = data;
                ioScope.results[index].open = true;
            });
        };

    }]);
