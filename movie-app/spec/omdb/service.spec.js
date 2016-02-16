describe('omdb service', function () {
    var movieData = {
        "Search": [{
            "Title": "Star Wars",
            "Year": "1983",
            "Rated": "N/A",
            "Released": "01 May 1983",
            "Runtime": "N/A",
            "Genre": "Action, Adventure, Sci-Fi",
            "Director": "N/A",
            "Writer": "N/A",
            "Actors": "Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones",
            "Plot": "N/A",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "N/A",
            "Metascore": "N/A",
            "imdbRating": "7.8",
            "imdbVotes": "349",
            "imdbID": "tt0251413",
            "Type": "game",
            "Response": "True"
        }]
    };

    var movieDataById = {
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
    };

    var omdbApi;
    var $httpBackend; // We need to connect to this service for testing. This replaces the regular HTTP calls with mocked ones.
    beforeEach(angular.mock.module('omdb'));
    // Other ways are deprecated in this revision, since the module 'omdb' is already defined in actual app.

    // //Other two ways are by anonymous object and anonymous function, and can be used to brainstorm/prototype
    // //module ideas directly in the test code.
    //
    // //Option 1: Pass an anonymous JS object literal with a module within.
    // angular.mock.module({
    //     'omdbApi': {
    //         search: function (query) {
    //             return movieData;
    //         }
    //     }
    // });
    //
    // //Option 2: An anonymous function using a $provide service
    // //Difference is : other services ($http, etc) cannot be injected while using the Option 1(object) form)
    // angular.mock.module(function ($provide) {
    //     $provide.factory('omdbApi', function () {
    //         return {
    //             search: function (query) {
    //                 return movieData;
    //             }
    //         };
    //     });
    // });


    beforeEach(angular.mock.inject(function (_omdbApi_, _$httpBackend_) {
        //The injector passes back an instance of it, if it exists
        //Underscore wrapping is a convention that the injector uses, to prevent nameclash.
        omdbApi = _omdbApi_;
        $httpBackend = _$httpBackend_;
    }));


    it('Star Wars search validation', function () {

        //We have to configure the $httpBackend for this.

        //var expectedURL = 'http://www.omdbapi.com/?v=1&s=star%20wars';


        var expectedURL = function (url) {
            return url.indexOf('http://www.omdbapi.com') !== -1;
        };


        //as a second argument to when, the URL validator may be used instead of straightforward URL:
        $httpBackend.when('GET', expectedURL)
            .respond(200, movieData);




        //Using angular.mock.dump to serialize whatever into console, for debugging.
        //console.log(angular.mock.dump(movieData));

        //This no longer works: our service is no longer synchronous, and returns an unresolved promise instead.
        //expect(omdbApi.search('star wars')).toEqual(movieData);

        //Asynchronous adaptation:
        var response;
        omdbApi.search('star wars').then(function (data) {
            response = data;
        });


        $httpBackend.flush(); //Resolves all the pending promises openg against the mock-HTTP service.

        expect(response).toEqual(movieData);

    });

    it('Should return movie data by ID', function () {

        var expectedURL = "http://www.omdbapi.com/?v=1&i=tt0076759";

        $httpBackend.expect('GET', expectedURL).respond(200, movieDataById);

        var response;
        omdbApi.find('tt0076759').then(function (data) {
            response = data;
        });


        $httpBackend.flush(); //Resolves all the pending promises openg against the mock-HTTP service.

        expect(response).toEqual(movieDataById);

        //Synchronous version does not work anymore
        //expect(omdbApi.find('tt0076759')).toEqual(movieDataById);
    });

});
