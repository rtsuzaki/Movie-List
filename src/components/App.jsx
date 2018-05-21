class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allMovies: [{title:'new',runtime:'107 minutes',watched:true},{title:'movie', runtime:'45 minutes',watched:false}],
            displayedMovies: [{title:'new',runtime:'107 minutes',watched:true},{title:'movie', runtime:'45 minutes',watched:false}],
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
        var currentAllMovies = this.state.allMovies;
        var currentDisplayedMovies = this.state.displayedMovies;
        var newMovie = {title: input};
        currentAllMovies.push(newMovie);
        currentDisplayedMovies.push(newMovie);
        this.setState({allMovies: currentAllMovies, displayedMovies: currentDisplayedMovies})
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