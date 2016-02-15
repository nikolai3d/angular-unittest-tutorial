describe('omdb service', function() {
    var movieData = '{"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"349","imdbID":"tt0251413","Type":"game","Response":"True"}';

    it ('Star Wars search validation', function(){
        var service = {
            search: function(query){
                return movieData;
            }
        };
        expect(service.search('star wars')).toEqual(movieData);
    });
});
