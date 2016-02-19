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

    beforeEach(angular.mock.module('mainMovieApp'));

    beforeEach(angular.mock.inject(function (_$controller_) {
        localScope = {};
        _$controller_('HomeController', {
            $scope: localScope
        });
    }));

    it('Should rotate movies every 5 seconds', function () {
        //Should start at the first movie
        expect(localScope.result.Title).toBe(sampleResults[0].Title);

        //Should Update after 5 seconds.
        expect(localScope.result.Title).toBe(sampleResults[1].Title);

        //Should Update after 5 seconds.
        expect(localScope.result.Title).toBe(sampleResults[2].Title);

        //Should Update after 5 seconds and go back to the first one.
        expect(localScope.result.Title).toBe(sampleResults[2].Title);


    });

});
