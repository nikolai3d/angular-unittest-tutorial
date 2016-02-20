angular.module('mainMovieApp')
    .filter('fromNow', function fromNowFilter() {
        return function (iValue, iOptionalBaseDate) {
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

            var YEAR_IN_SECONDS = 60*60*24*365;
            var now = iOptionalBaseDate || new Date();
            //In unit test, iOptionalBaseDate is passed. In actual usage, it will not be
            //(filter won't have a second argument at all)



            var dateDiffSeconds = (now.getTime() - date.getTime()) /1000;
            var tzDiffSeconds = (now.getTimezoneOffset() - date.getTimezoneOffset())*60;

            var diffInSeconds = dateDiffSeconds + tzDiffSeconds;

            var yearsDiff = Math.floor(diffInSeconds/YEAR_IN_SECONDS);

            return yearsDiff + ' years ago';
        };
    });
