angular.module('omdb', []).factory('omdbApi', function ($http, $q) {
    //We are now using $http to perform actual http requests in the module.
    //$q is for asynchronous support, to return a promise upon completion.
    var service = {};
    var baseURL = 'http://www.omdbapi.com/?v=1&'; //Base URL for queries

    service.search = function(query) {
        var deferred = $q.defer();
        var urlFromQuery = baseURL+'s='+encodeURIComponent(query);
        $http.get(urlFromQuery).success(function(data){
            deferred.resolve(data);
        });

        return deferred.promise;
    };
    // service.search = function (query) {
    //     return {
    //         "Search": [{
    //             "Title": "Star Wars",
    //             "Year": "1983",
    //             "Rated": "N/A",
    //             "Released": "01 May 1983",
    //             "Runtime": "N/A",
    //             "Genre": "Action, Adventure, Sci-Fi",
    //             "Director": "N/A",
    //             "Writer": "N/A",
    //             "Actors": "Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones",
    //             "Plot": "N/A",
    //             "Language": "English",
    //             "Country": "USA",
    //             "Awards": "N/A",
    //             "Poster": "N/A",
    //             "Metascore": "N/A",
    //             "imdbRating": "7.8",
    //             "imdbVotes": "349",
    //             "imdbID": "tt0251413",
    //             "Type": "game",
    //             "Response": "True"
    //         }]
    //     };
    // };

    service.find = function(id){
        return {
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
    };

    return service;
});
