angular.module('omdb', []).factory('omdbApi', function ($http, $q) {
    //We are now using $http to perform actual http requests in the module.
    //$q is for asynchronous support, to return a promise upon completion.
    var service = {};
    var baseURL = 'http://www.omdbapi.com/?v=1&'; //Base URL for queries


    var httpPromise = function (url) {

        var deferred = $q.defer();
        $http.get(url)
            .success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                //Proper error handling of the promise
                deferred.reject();
            });

        return deferred.promise;

    }

    service.search = function (query) {

        var urlFromQuery = baseURL + 's=' + encodeURIComponent(query);

        return httpPromise(urlFromQuery);
    };




    service.find = function (id) {

        var urlFromQuery = baseURL + 'i=' + encodeURIComponent(id);

        return httpPromise(urlFromQuery);

    };

    return service;
});
