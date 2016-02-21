angular.module('mainMovieApp')
    .controller('HomeController', ['$scope', '$interval', 'omdbApi', 'PopularMovies', '$exceptionHandler', '$log',
        function ($scope, $interval, omdbApi, PopularMovies, iExceptionHandler, iLogging) {
            iLogging.log('standard log');
            iLogging.info('info log');
            //iLogging.error('error log');
            //iLogging.warn('warn log');
            iLogging.debug('some debug information');

            var fCarouselOfMovieIDs = [];
            var fCurrentCarouselIndex = 0;
            $scope.fCurrentMovieData = null;
            var findAndFetchMovieDataByID = function (id) {
                omdbApi.find(id)
                    .then(function (data) {
                        $scope.fCurrentMovieData = data;
                    })
                    .catch(function (e) {
                        iExceptionHandler(e);
                    })
            };

            // PopularMovies.get().then(function (data) {
            //     fCarouselOfMovieIDs = data;
            //     //fCarouselOfMovieIDs = ['tt0076759', 'tt0080684','tt0086190'];
            //     findAndFetchMovieDataByID(fCarouselOfMovieIDs[0]);
            //
            //     $interval(function () {
            //         ++fCurrentCarouselIndex;
            //         findAndFetchMovieDataByID(fCarouselOfMovieIDs[fCurrentCarouselIndex % fCarouselOfMovieIDs.length]);
            //     }, 5000);
            // });

            PopularMovies.query(function (data) {
                fCarouselOfMovieIDs = data.fPopularResults;
                findAndFetchMovieDataByID(fCarouselOfMovieIDs[0]);

                $interval(function () {
                    ++fCurrentCarouselIndex;
                    findAndFetchMovieDataByID(fCarouselOfMovieIDs[fCurrentCarouselIndex % fCarouselOfMovieIDs.length]);
                }, 5000);
            });


            //$scope.result = fCarouselOfMovieIDs[0];


        }
    ]);
