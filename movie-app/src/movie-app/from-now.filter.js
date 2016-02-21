angular.module('mainMovieApp')
    .filter('fromNow', function fromNowFilter() {
        return function (iValue, iOptionalBaseDate) {
            if (!iValue) {
                return null;
            }

            var date = iValue;

            if (typeof (iValue) === 'string') {
                date = new Date(date);
            }

            if (isNaN(date.getTime())) {
                return iValue;
            }

            var YEAR_IN_SECONDS = 60 * 60 * 24 * 365;
            var APPROX_MONTH_IN_SECONDS = YEAR_IN_SECONDS / 12;

            var now = iOptionalBaseDate || new Date();
            //In unit test, iOptionalBaseDate is passed. In actual usage, it will not be
            //(filter won't have a second argument at all)



            var dateDiffSeconds = (now.getTime() - date.getTime()) / 1000;

            var tzDiffSeconds = (now.getTimezoneOffset() - date.getTimezoneOffset()) * 60;

            var diffInSeconds = dateDiffSeconds + tzDiffSeconds;

            var yearsDiff = Math.floor(diffInSeconds / YEAR_IN_SECONDS);

            if (yearsDiff == 1) {
                return yearsDiff + ' year ago';
            } else if (yearsDiff > 1) {
                return yearsDiff + ' years ago';
            } else {
                var monthsDiff = Math.round(diffInSeconds / APPROX_MONTH_IN_SECONDS);
                if (monthsDiff == 1) {
                    return monthsDiff + ' month ago';
                } else if (monthsDiff > 1) {
                    return monthsDiff + ' months ago';
                } else {
                    return 'Less than a month ago';
                }
            }

        };
    });
