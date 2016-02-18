describe('', function () {

    //    var $scope = {};
    var $this = {};
    var injectedLocation = {};
    var $controller = {};

    //setup
    beforeEach(angular.mock.module('mainMovieApp'));
    beforeEach(angular.mock.inject(function (_$controller_, _$location_) {

        //angular.mock.inject is needed so we have access to $controller service
        injectedLocation = _$location_;
        $controller = _$controller_;

    }));

    it('Should Redirect To Query Results Page For Non-Empty Query', function () {
        //We are now using $this, and pass scope bindings in a third argument
        $this = $controller('SearchController', {$location : injectedLocation}, { query : 'star wars'});
        $this.search();
        expect(injectedLocation.url()).toBe('/results?q=star%20wars');
    });

    it('Should NOT Redirect To Query Results Page For Empty Query', function () {
        //We are now using $this, and pass scope bindings in a third argument
        $this = $controller('SearchController', {$location : injectedLocation}, { query : ''});
        $this.search();
        expect(injectedLocation.url()).toBe('');
    });


});
