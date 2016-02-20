describe('Home Controller', function () {

    var sampleResults = [{
        "Title": "Star Wars: Episode IV - A New Hope",
        "imdbID": "tt0076759"
    }, {
        "Title": "Star Wars: Episode V - The Empire Strikes Back",
        "imdbID": "tt0080684"
    }, {
        "Title": "Star Wars: Episode VI - Return of the Jedi",
        "imdbID": "tt0086190"
    }];

    var localScope;
    var injectedNgMockInterval;

    beforeEach(angular.mock.module('mainMovieApp'));

    //Mocking the PopularMovies service behavior, similar to any other way we would mock an asynchronous service.

    beforeEach(angular.mock.inject(function (_$q_, _PopularMovies_) {
        spyOn(_PopularMovies_, 'get').and.callFake(function () {
            var deferred = _$q_.defer();
            deferred.resolve(['tt0076759', 'tt0080684','tt0086190']);
            return deferred.promise;
        });
    }));

    //Mocking the omdbAPI behavior
    beforeEach(angular.mock.inject(function (_$q_, _omdbApi_) {
        //Jasmine's spyOn to the rescue
        spyOn(_omdbApi_, 'find').and.callFake(function () {
            var deferred = _$q_.defer();
            //Some funky Jasmine code to fish out the argument that the original 'find' function was called with
            var findWhatArgument = _omdbApi_.find.calls.mostRecent().args[0];
            if (findWhatArgument === 'tt0076759') {
                deferred.resolve(sampleResults[0]);
            } else if (findWhatArgument === 'tt0080684') {
                deferred.resolve(sampleResults[1]);
            } else if (findWhatArgument === 'tt0086190'){
                deferred.resolve(sampleResults[2]);
            } else {
                //If the movie ID is not one of three, reject the promise, will fail test
                deferred.reject();
            }
        //    deferred.resolve(['tt0076759', 'tt0080684','tt0086190']);
            return deferred.promise;
        });
    }));



    beforeEach(angular.mock.inject(function (_$controller_, _$interval_, _omdbApi_, _PopularMovies_, _$rootScope_) {
        localScope = {};
        injectedNgMockInterval = _$interval_;
        _$controller_('HomeController', {
            $scope: localScope,
            $interval: injectedNgMockInterval,
            omdbAPI: _omdbApi_,
            PopularMovies: _PopularMovies_
        });

        _$rootScope_.$apply();
    }));

    it('Should rotate movies every 5 seconds', function () {
        //Should start at the first movie
        expect(localScope.fCurrentMovieData.Title).toBe(sampleResults[0].Title);
        injectedNgMockInterval.flush(5000);
        //Should Update after 5 seconds.
        expect(localScope.fCurrentMovieData.Title).toBe(sampleResults[1].Title);
        injectedNgMockInterval.flush(5000);

        //Should Update after 5 seconds.
        expect(localScope.fCurrentMovieData.Title).toBe(sampleResults[2].Title);
        injectedNgMockInterval.flush(5000);

        //Should Update after 5 seconds and go back to the first one.
        expect(localScope.fCurrentMovieData.Title).toBe(sampleResults[0].Title);


    });

});
