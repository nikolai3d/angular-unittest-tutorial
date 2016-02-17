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

        //'{"movieId":"tt0076759","description":"Great movie!"}'
        var expectedDataValidator = function (data) {

            dump(angular.mock.dump(data));

            return angular.fromJson(data).movieId === 'tt0076759';

        }

        //To expect, we can pass a validator function, an exact value, or regular expression.
        var expectedDataExact = '{"movieId":"tt0076759","description":"Great movie!"}';

        var expectedDataRegexp = /{"movieId":"tt0076759","description":".*"}/;
        $httpBackend.expectPOST(/./, expectedDataRegexp) //expectedDataExact) //expectedDataValidator)
            .respond(201);

        var popularMovie = new PopularMovies({
            movieId: 'tt0076759',
            description: 'Great movie!'
        });

        popularMovie.$save();

        expect($httpBackend.flush).not.toThrow(); //Another check
    });


    it("Should Get Popular Movie by id", function () {

        var urlValidator = function (url) {
            dump(url);
            return url === 'popular/tt0076759';

        };


        $httpBackend.expectGET(urlValidator)
            .respond(200);

        PopularMovies.get({
            movieId: 'tt0076759'
        });

        expect($httpBackend.flush).not.toThrow(); //Another check

    });
});
