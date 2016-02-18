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
        $httpBackend.verifyNoOutstandingRequest(); //Extra assert to make sure we flush all backend requests stuff
    });

    it('Should Create Popular Movie', function () {

        //'{"movieId":"tt0076759","description":"Great movie!"}'
        // var expectedDataValidator = function (data) {
        //
        //     //dump(angular.mock.dump(data));
        //
        //     return angular.fromJson(data).movieId === 'tt0076759';
        //
        // }
        //
        // //To expect, we can pass a validator function, an exact value, or regular expression.
        // var expectedDataExact = '{"movieId":"tt0076759","description":"Great movie!"}';

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
            //dump(url);
            return url === 'popular/tt0076759';

        };


        $httpBackend.expectGET(urlValidator)
            .respond(200);

        PopularMovies.get({
            movieId: 'tt0076759'
        });

        expect($httpBackend.flush).not.toThrow(); //Another check

    });


    it('Should Update Popular Movie', function () {

        // //'{"movieId":"tt0076759","description":"Great movie!"}'
        // var expectedDataValidator = function (data) {
        //
        //     //dump(angular.mock.dump(data));
        //
        //     return angular.fromJson(data).movieId === 'tt0076759';
        //
        // }

        //To expect, we can pass a validator function, an exact value, or regular expression.
        //var expectedDataExact = '{"movieId":"tt0076759","description":"Great movie!"}';

        //var expectedDataRegexp = /{"movieId":"tt0076759","description":".*"}/;
        $httpBackend.expectPUT('popular') //expectedDataExact) //expectedDataValidator)
            .respond(200);

        var popularMovie = new PopularMovies({
            movieId: 'tt0076759',
            description: 'Great movie!'
        });

        popularMovie.$update();

        expect($httpBackend.flush).not.toThrow(); //Another check
    });

    it('Should Authenticate GET request', function () {
        var expectedHeaders = function (headers) {
            //dump(angular.mock.dump(headers));

            return angular.fromJson(headers).authToken === 'cookieValueTeddyBear';
        };

        $httpBackend.expectGET('popular/tt0076759', expectedHeaders)
            .respond(200);

        PopularMovies.get({
            movieId: 'tt0076759'
        });

        expect($httpBackend.flush).not.toThrow(); //Another check
    });

    it('Should Authenticate all requests', function () {
        var headerDataValidator = function (headers) {
            return headers.authToken === 'cookieValueTeddyBear';
        };

        var matchAnyRegexp = /.*/;

        $httpBackend.whenGET(matchAnyRegexp, headerDataValidator)
            .respond(200);

        $httpBackend.expectPOST(matchAnyRegexp, matchAnyRegexp, headerDataValidator)
            .respond(200);

        $httpBackend.expectPUT(matchAnyRegexp, matchAnyRegexp, headerDataValidator)
            .respond(200);

        $httpBackend.expectDELETE(matchAnyRegexp, headerDataValidator)
            .respond(200);

        var popularMovie = new PopularMovies({
            movieId: 'tt0076759',
            description: 'Great movie!'
        });

        PopularMovies.query();
        PopularMovies.get({id: 'tt0076759' });
        new PopularMovies(popularMovie).$save();
        new PopularMovies(popularMovie).$update();
        new PopularMovies(popularMovie).$remove();

        // $httpBackend.flush(1);
        // $httpBackend.flush(1);
        // $httpBackend.flush(1);
        // $httpBackend.flush(1);
        // 5 requests, 4 flushes: $httpBackend.verifyNoOutstandingRequest()
        //would catch this as an error

        expect($httpBackend.flush).not.toThrow();

    });

});
