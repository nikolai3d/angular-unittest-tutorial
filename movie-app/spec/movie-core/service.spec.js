describe('MovieCore', function(){
    var PopularMovies;
    var $httpBackend;

    beforeEach(angular.mock.module('movieCore'));

    beforeEach(angular.mock.inject(function(_PopularMovies_, _$httpBackend_){
        PopularMovies = _PopularMovies_;
        $httpBackend = _$httpBackend_;
    }));

    it('Should Create Popular Movie', function(){

        var popularMovie = new PopularMovies({
            movieId: 'tt0076759',
            description: 'Great movie!'
        });

        popularMovie.$save();
    });

});
