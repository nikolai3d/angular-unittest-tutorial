describe('From Now Filter', function () {

    var fromNow;

    beforeEach(angular.mock.module('mainMovieApp'));

    beforeEach(angular.mock.inject(function (_$filter_) {
        fromNow = _$filter_('fromNow');
    }));

    it('Should throw error if argument is undefined', function () {
        expect(fromNow).toThrow('Date Value cannot be undefined');
    });

    it('Should return same value is a date is an invalid date', function () {
        expect(fromNow('invalid_date-example')).toBe('invalid_date-example');
    });

    it('Should return value of Years Ago for date object', function () {

        //Enter the TzDate: angular Date wrapper to not depend on local machine's time zone settings.
        //NOTE: not all of the Date() functionality is implementd in TzDate.
        var value = new angular.mock.TzDate(0, '2013-07-01T00:00:00.000Z');
        var baseDate = new angular.mock.TzDate(0, '2015-07-01T00:00:00.000Z');

        expect(fromNow(value, baseDate)).toBe('2 years ago');
    });

    it('Should return value of 1 Years Ago #singular #grammar', function () {

        //Enter the TzDate: angular Date wrapper to not depend on local machine's time zone settings.
        //NOTE: not all of the Date() functionality is implementd in TzDate.
        var value = new angular.mock.TzDate(0, '2014-07-01T00:00:00.000Z');
        var baseDate = new angular.mock.TzDate(0, '2015-07-01T00:00:00.000Z');

        expect(fromNow(value, baseDate)).toBe('1 year ago');
    });
});
