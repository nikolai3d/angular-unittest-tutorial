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
    })
});
