describe('Movie Result Directive', function () {

    //Unit testing an Angular JS HTML Directive

    var sampleResult = {
        Poster: "http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX300.jpg",
        Title: "Star Wars: Episode IV - A New Hope",
        Director: "George Lucas",
        Actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
        Released: "25 May 1977",
        Genre: "Action, Adventure, Fantasy"
    };


    var expectedHTML=[
        '<div class="col-sm-4">',
            '<img ng-src="http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX300.jpg" alt="Star Wars: Episode IV - A New Hope" width="220" src="http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX300.jpg">',
        '</div>',
        '<div class="col-sm-8">',
        '<h3 class="ng-binding">Star Wars: Episode IV - A New Hope</h3>',
            '<p class="ng-binding"><strong>Director:</strong> George Lucas</p>',
            '<p class="ng-binding"><strong>Actors:</strong> Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing</p>',
            '<p class="ng-binding"><strong>Released:</strong> 25 May 1977</p>',
            '<p class="ng-binding"><strong>Genre:</strong> Action, Adventure, Fantasy</p></div>'
    ].join('');

    var injectedCompileService;
    var injectedRootScope;


    beforeEach(angular.mock.module('mainMovieApp'));

    beforeEach(angular.mock.inject(function (_$compile_, _$rootScope_) {
        injectedCompileService = _$compile_;
        injectedRootScope = _$rootScope_;
    }));

    it('Should Output Movie Result to expected HTML format', function () {

        //var scope = {};

        injectedRootScope.fCurrentMovieData = sampleResult;

        var element = injectedCompileService('<movie-result result="fCurrentMovieData"></movie-result>')(injectedRootScope);


        injectedRootScope.$digest();

        expect(element.html()).toBe(expectedHTML);

    });


});
