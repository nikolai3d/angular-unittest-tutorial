angular.module('mainMovieApp')
    .filter('fromNow', function fromNowFilter(){
        return function (iValue) {
            if (!iValue) {
                throw 'Date Value cannot be undefined';
            }

        };
    });
    
