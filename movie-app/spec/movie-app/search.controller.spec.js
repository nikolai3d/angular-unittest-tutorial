describe('Search Controller', function () {

    //    var $scope = {};
    var $scope = {};
    var injectedLocation = {};
    var injectedNgMockTimeout = {};
    var $controller = {};

    //setup
    beforeEach(angular.mock.module('mainMovieApp'));
    beforeEach(angular.mock.inject(function (_$controller_, _$location_, _$timeout_) {

        //angular.mock.inject is needed so we have access to $controller service
        injectedLocation = _$location_;
        $controller = _$controller_;
        injectedNgMockTimeout = _$timeout_;
        $controller('SearchController', {
            $scope: $scope,
            $timeout: injectedNgMockTimeout,
            $location: injectedLocation
        });

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
        //injectedTimeout.flush(500); //This will fail since our timeout is 1000 msec

        injectedNgMockTimeout.flush(); //This will pass, trigger the timeout and perform search

        expect(injectedNgMockTimeout.verifyNoPendingTasks).not.toThrow();
        //verifyNoPendingTasks Double-checks test setup, will throw & print error if outstanding timeouts are still there
        expect(injectedLocation.url()).toBe('/results?q=star%20wars');
    });


    it('Should cancel timeout if a key is pressed', function () {
        $scope.query = 'star wars';
        $scope.keyup();
        $scope.keydown();
        expect(injectedNgMockTimeout.verifyNoPendingTasks).not.toThrow(); //Here it's an actual check: we make sure all timeouts are canceled at this point.

    });

    it('Should cancel timeout if search is executed', function () {
        $scope.query = 'star wars';
        $scope.keyup();
        $scope.search();
        expect(injectedNgMockTimeout.verifyNoPendingTasks).not.toThrow(); //Here it's an actual check: we make sure all timeouts are canceled at this point.

    });
});
