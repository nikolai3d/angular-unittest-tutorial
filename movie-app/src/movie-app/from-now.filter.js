angular.module('mainMovieApp')
    .filter('fromNow', function fromNowFilter() {
        return function (iValue) {
            if (!iValue) {
                throw 'Date Value cannot be undefined';
            }

            var date = iValue;

            if (typeof (iValue) === 'string') {
                date = new Date(date);
            }

            if (isNaN(date.getTime())) {
                return iValue;
            }

            return iValue;
        };
    });
