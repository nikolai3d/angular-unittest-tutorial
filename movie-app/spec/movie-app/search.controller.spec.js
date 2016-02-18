describe('', function () {

    var $scope = {};
    var $location = {};

    //setup

    beforeEach(function () {
        $location = {
                url:''
        };
        $scope = {};

        $scope.search = function () {
            if ($scope.query) {
                $location.url = '/results?q=star%20wars';
            }
        };
    });

    it('Should Redirect To Query Results Page For Non-Empty Query', function () {
        $scope.query='star wars';
        $scope.search();

        expect($location.url).toBe('/results?q=star%20wars');
    });

    it('Should NOT Redirect To Query Results Page For Empty Query', function () {
        $scope.query='';
        $scope.search();

        expect($location.url).toBe('');
    });


});
