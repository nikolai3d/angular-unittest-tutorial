describe('Results Controller', function () {
    var sampleResults = {
        "Search": [{
            "Title": "Star Wars: Episode IV - A New Hope",
            "Year": "1977",
            "Rated": "PG",
            "Released": "25 May 1977",
            "Runtime": "121 min",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "George Lucas",
            "Writer": "George Lucas",
            "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
            "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Won 6 Oscars. Another 38 wins & 27 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX300.jpg",
            "Metascore": "92",
            "imdbRating": "8.7",
            "imdbVotes": "852,420",
            "imdbID": "tt0076759",
            "Type": "movie",
            "Response": "True"
        }, {
            "Title": "Star Wars: Episode V - The Empire Strikes Back",
            "Year": "1980",
            "Rated": "PG",
            "Released": "20 Jun 1980",
            "Runtime": "124 min",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "Irvin Kershner",
            "Writer": "Leigh Brackett (screenplay), Lawrence Kasdan (screenplay), George Lucas (story)",
            "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
            "Plot": "After the rebels have been brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Won 1 Oscar. Another 15 wins & 17 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg",
            "Metascore": "79",
            "imdbRating": "8.8",
            "imdbVotes": "788,496",
            "imdbID": "tt0080684",
            "Type": "movie",
            "Response": "True"
        }, {
            "Title": "Star Wars: Episode VI - Return of the Jedi",
            "Year": "1983",
            "Rated": "PG",
            "Released": "25 May 1983",
            "Runtime": "131 min",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "Richard Marquand",
            "Writer": "Lawrence Kasdan (screenplay), George Lucas (screenplay), George Lucas (story)",
            "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
            "Plot": "After rescuing Han Solo from the palace of Jabba the Hutt, the rebels attempt to destroy the second Death Star, while Luke struggles to make Vader return from the dark side of the Force.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Nominated for 4 Oscars. Another 15 wins & 15 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ0MzI1NjYwOF5BMl5BanBnXkFtZTgwODU3NDU2MTE@._V1._CR93,97,1209,1861_SX89_AL_.jpg_V1_SX300.jpg",
            "Metascore": "52",
            "imdbRating": "8.4",
            "imdbVotes": "637,867",
            "imdbID": "tt0086190",
            "Type": "movie",
            "Response": "True"
        }]
    };

    var $controller;
    var injectedQ; //To work with promises
    var injectedRootScope; //To Execute promises
    var $scope;
    var injectedOmdbAPI; //omdbAPI to intercept and spyOn
    var injectedLocation; //To pass search parameters


    beforeEach(angular.mock.module('omdb'));
    beforeEach(angular.mock.module('mainMovieApp'));

    beforeEach(angular.mock.module(function ($exceptionHandlerProvider) {
        $exceptionHandlerProvider.mode('rethrow');
    }))

    beforeEach(angular.mock.inject(function (_$controller_, _$location_, _$q_, _$rootScope_, _omdbApi_) {
        $controller = _$controller_;
        $scope = {};

        injectedQ = _$q_;
        injectedRootScope = _$rootScope_;
        injectedOmdbAPI = _omdbApi_;
        injectedLocation = _$location_;
    }));

    it('Should Load Correct Search Results', function () {

        //Jasmine spyOn allows us to track calls here:
        spyOn(injectedOmdbAPI, 'search').and.callFake(function () {
            //We mock the 'search' function here,
            // but now we need to mock the promise mechanism too
            var deferred = injectedQ.defer();

            deferred.resolve(sampleResults);

            return deferred.promise;
        });

        injectedLocation.search('q', 'star wars'); //This creates a query via setting the location URL


        $controller('ResultsController', {$scope : $scope, $location: injectedLocation});

        //At this point, AngularJS Event cycle is ready to process and resolve the promise.
        //But we need this line to actually do the processing:

        injectedRootScope.$apply();

        expect($scope.results[0].Title).toBe(sampleResults.Search[0].Title);
        expect($scope.results[1].Title).toBe(sampleResults.Search[1].Title);
        expect($scope.results[2].Title).toBe(sampleResults.Search[2].Title);

        //Extra check: make sure the API was called with expected argument.
        expect(injectedOmdbAPI.search).toHaveBeenCalledWith('star wars');

    });

    it('Should display Error on search error', function () {
        spyOn(injectedOmdbAPI, 'search').and.callFake(function () {
            var deferred = injectedQ.defer();
            deferred.reject('Something Went Wrong!'); //Same as previous one, but the promise rejects
            return deferred.promise;
        });

        injectedLocation.search('q', 'star wars'); //This creates a query via setting the location URL


        expect(function () {
            $controller('ResultsController', {$scope : $scope, $location: injectedLocation});
            injectedRootScope.$apply();
        }).toThrow('Something Went Wrong!');



    });

});
