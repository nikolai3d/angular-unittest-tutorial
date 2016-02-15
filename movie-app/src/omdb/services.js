angular.module('omdb', []).factory('omdbApi', function () {
    var service = {};

    service.search = function (query) {
        return {
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
    };

    return service;
});
