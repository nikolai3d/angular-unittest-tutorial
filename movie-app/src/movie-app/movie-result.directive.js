angular.module('mainMovieApp')
    .directive('movieResult', function () {
        return {
            restrict: 'E',
            replace: true,
            scope:
            {
                result: '=result'
            },
            template:[
                '<div>',
                '<div>{{result.Title}}</div>',
                '</div>'
            ].join('')

            }
    });
