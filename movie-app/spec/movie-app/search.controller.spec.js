describe('', function () {
    it('Should Redirect To Query Results Page For Non-Empty Query', function () {
        var $scope = {};
        var $location = {};

        $scope.search = function(){
            $location.url = '/results?q=star%20wars';
        };

        $scope.query='star wars';
        $scope.search();

        expect($location.url).toBe('/results?q=star%20wars');
    });
});
