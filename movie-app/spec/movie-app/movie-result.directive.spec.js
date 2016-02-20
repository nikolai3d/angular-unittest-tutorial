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

        expect(element.html()).toBe('<div class="ng-binding">Star Wars: Episode IV - A New Hope</div>');

    });


});
