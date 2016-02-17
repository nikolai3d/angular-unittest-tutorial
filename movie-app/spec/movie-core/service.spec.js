describe('MovieCore', function () {
    var PopularMovies;
    var $httpBackend;

    beforeEach(angular.mock.module('movieCore'));

    beforeEach(angular.mock.inject(function (_PopularMovies_, _$httpBackend_) {
        PopularMovies = _PopularMovies_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function () {

        //This verifies that all calls came through.
        $httpBackend.verifyNoOutstandingExpectation();
    });

    it('Should Create Popular Movie', function () {

        var expectedDataValidator = function (data) {
            dump(angular.mock.dump(data));
            return true;
        }

        $httpBackend.expectPOST(/./, expectedDataValidator)
            .respond(201);

        var popularMovie = new PopularMovies({
            movieId: 'tt0076759',
            description: 'Great movie!'
        });

        popularMovie.$save();
    });

});
