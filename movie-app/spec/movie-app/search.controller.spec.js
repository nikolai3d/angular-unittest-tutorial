describe('', function () {

    var $scope = {};
    var $location = {};

    //setup
    beforeEach(angular.mock.module('mainMovieApp'));
    beforeEach(angular.mock.inject(function (_$controller_, _$location_) {

        //angular.mock.inject is needed so we have access to $controller service
        $location = _$location_;
        $scope = {};



        //controllerPrototype is a controller in-line prototype here, no actual test code outside of JS exists.
        _$controller_('SearchController', {
            $scope: $scope,
            $location: $location
        });
    }));

    it('Should Redirect To Query Results Page For Non-Empty Query', function () {
        $scope.query = 'star wars';
        $scope.search();

        expect($location.url()).toBe('/results?q=star%20wars');
    });

    it('Should NOT Redirect To Query Results Page For Empty Query', function () {
        $scope.query = '';
        $scope.search();

        expect($location.url()).toBe('');
    });


});
