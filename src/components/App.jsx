class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allMovies: [{title:'new',overview:'blah',releaseDate: 1990, watched:true},{title:'movie', overview: 'merp', releaseDate: 1990, watched:false}],
            displayedMovies: [{title:'new',overview:'blah',releaseDate: 1990, watched:true},{title:'movie', overview: 'merp', releaseDate: 1990, watched:false}],
            homeWatchedStatus: 'neutral',
            // homeToWatchStatus: false,
        }
    }
    
    searchMovies(query) {
        var searchResults = [];
        this.state.allMovies.forEach((movie) => {
            if (((movie.title).toLowerCase()).includes( query.toLowerCase())) {
                searchResults.push(movie);
            }
        })
        if (searchResults.length === 0) {
            this.setState({displayedMovies: [{title: 'No Movie By That Name Found'}]})
        } else {
        this.setState({displayedMovies: searchResults})
        }
    }

    addMovie(input) {
        // var currentAllMovies = this.state.allMovies;
        // var currentDisplayedMovies = this.state.displayedMovies;
        // var newMovie = {title: input};
        // currentAllMovies.push(newMovie);
        // currentDisplayedMovies.push(newMovie);
        // this.setState({allMovies: currentAllMovies, displayedMovies: currentDisplayedMovies})
            // TODO
            //console.log('hi');
        var app = this;
        var setMovieToResult = function(result) {
            var currentAllMovies = app.state.allMovies;
            var currentDisplayedMovies = app.state.displayedMovies;
            var newMovie = {title: result.title, overview:result.overview, releaseDate:result.release_date,watched:true};
            currentAllMovies.push(newMovie);
            currentDisplayedMovies.push(newMovie);
            app.setState({allMovies: currentAllMovies, displayedMovies: currentDisplayedMovies})
        }

        var getRequest = function(query,callback) {
            $.ajax({
                type: 'GET',
                url: 'https://api.themoviedb.org/3/search/movie?api_key=8d3019d7e1b1e943a4913b1001f655f5&language=en-US&query=' + query + '&page=1&include_adult=false',
                success: function(data) {
                    console.log(data.results[0]);
                    callback(data.results[0]);
                }
            });
        };
        getRequest(input,setMovieToResult);
    }

    handleHomeWatchedClick() {
        var prevStatus = this.state.homeWatchedStatus;
        if (prevStatus === 'watched') {
          this.setState({homeWatchedStatus:'neutral'});
        } else {
            this.setState({homeWatchedStatus:'watched'})
        }
    }
   
    handleToWatchClick() {
        var prevStatus = this.state.homeWatchedStatus;
        if (prevStatus === 'toWatch') {
          this.setState({homeWatchedStatus:'neutral'});
        } else {
            this.setState({homeWatchedStatus:'toWatch'})
        }
    }

    render() {
        return (
            <div>
              <nav className="navbar">
                <div className="title">
                    <h1>Movie List</h1>
                </div>
              <div>
                <WatchButtons handleHomeWatchedClick= {this.handleHomeWatchedClick.bind(this)} handleToWatchClick={this.handleToWatchClick.bind(this)} homeWatchedStatus={this.state.homeWatchedStatus}/>
              </div>
              </nav>
              <div>
                <Search searchMovies={this.searchMovies.bind(this)}/>
                <MovieInput addMovie={this.addMovie.bind(this)}/>
                </div>
              <div className="col-md-5">
                <MovieList displayedMovies={this.state.displayedMovies} homeWatchedStatus={this.state.homeWatchedStatus}/>
              </div>
            </div>  
        )
    }
}

window.App = App;