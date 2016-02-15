describe('omdb service', function () {
    var movieData = '{"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"349","imdbID":"tt0251413","Type":"game","Response":"True"}';

    it('Star Wars search validation', function () {
        var omdbApi = {};

        //Configure the module for usage

        //Option 0 is to reference an existing angularJS module by string.
        //It'd look something like this:

        //              angular.mock.module('omdbApi');

        //This doesn't apply here since we do not have any modules (or any ng-app whatsoever) yet


        //Other two ways are by anonymous object and anonymous function, and can be used to brainstorm/prototype
        //module ideas directly in the test code.

        //Option 1: Pass an anonymous JS object literal with a module within.
        angular.mock.module({
            'omdbApi': {
                search: function (query) {
                    return movieData;
                }
            }
        });

        //Option 2: An anonymous function using a $provide service
        //Difference is : other services ($http, etc) cannot be injected while using the Option 1(object) form)
        angular.mock.module(function ($provide) {
            $provide.factory('omdbApi', function () {
                return {
                    search: function (query) {
                        return movieData;
                    }
                };
            });
        });

        //inject is what instantiates configured modules
        angular.mock.inject(function (_omdbApi_) {
            omdbApi = _omdbApi_; //The injector passes back an instance of it, if it exists
            //Underscore wrapping is a convention that the injector uses, to prevent nameclash.

        });
        expect(omdbApi.search('star wars')).toEqual(movieData);
    });
});
