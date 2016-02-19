describe('Search Controller', function () {

    //    var $scope = {};
    var $scope = {};
    var injectedLocation = {};
    var injectedTimeout = {};
    var $controller = {};

    //setup
    beforeEach(angular.mock.module('mainMovieApp'));
    beforeEach(angular.mock.inject(function (_$controller_, _$location_, _$timeout_) {

        //angular.mock.inject is needed so we have access to $controller service
        injectedLocation = _$location_;
        $controller = _$controller_;
        injectedTimeout = _$timeout_;
        $controller('SearchController', {$scope: $scope, $timeout: injectedTimeout, $location : injectedLocation});

    }));

    it('Should Redirect To Query Results Page For Non-Empty Query', function () {
        //We are now using $this, and pass scope bindings in a third argument
        $scope.query = 'star wars';
        $scope.search();
        expect(injectedLocation.url()).toBe('/results?q=star%20wars');
    });

    it('Should NOT Redirect To Query Results Page For Empty Query', function () {
        $scope.query = '';
        //We are now using $this, and pass scope bindings in a third argument
        $scope.search();
        expect(injectedLocation.url()).toBe('');
    });

    it('Should Redirect To Results after 1 second of Keyboard Inactivity', function () {
        $scope.query = 'star wars';
        $scope.keyup();
        injectedTimeout.flush(); //ngMock's timeout service, force trigger the timeout
        expect(injectedLocation.url()).toBe('/results?q=star%20wars');
    });

});
