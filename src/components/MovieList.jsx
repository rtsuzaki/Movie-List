var MovieList = (props) => (
    <div className='movie-list'>
      {props.displayedMovies.map((movie)=> <MovieListEntry movie={movie} movieWatchedStatus = {movie.watched} homeWatchedStatus={props.homeWatchedStatus}/>
      )}
    </div>  
)

window.MovieList = MovieList;