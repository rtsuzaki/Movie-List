class MovieListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayInfo:true,
      watchStatus: props.movieWatchedStatus,
    }
  }
  
  handleWatchClick() {
    var previousState = this.state.watchStatus;
    this.setState({watchStatus:!previousState})
    console.log('clicked')
  }
  
  handleInfoDisplay() {
    var previousState = this.state.displayInfo;
    this.setState({displayInfo:!previousState})
    console.log('clicked')
  }

  render() {
      var display = null;
      if (this.props.homeWatchedStatus === 'watched') {
        if (this.state.watchStatus) {
          // this.setState({display:true})
          display = 'watched';
        } else {
          // this.setState({display:false})
          display = 'off';
        }
      } else if (this.props.homeWatchedStatus === 'toWatch') {
          if (!this.state.watchStatus) {
            // this.setState({display:true})
            display = 'toWatch';
          } else {
            // this.setState({display:false})
            display = 'off';
          }
      } else if (this.props.homeWatchedStatus === 'neutral') {
          if (this.state.watchStatus) {
            display = 'watched';
          } else {
            display = 'toWatch';
          }
      }


      if (display === 'watched') {
        var movieWatchDisplay = <button className="watched" onClick={this.handleWatchClick.bind(this)}>Watched</button>
      } else if (display === 'toWatch') {
        var movieWatchDisplay = <button className="to-watch" onClick={this.handleWatchClick.bind(this)}>To Watch</button>
      }

      if (this.state.displayInfo) {
        var movieInfo = (
          <div className = "movie-info">
            <div display='block'>
            <b>Overview:</b> 
            </div>
            <div className = 'overview-info' display='block'>
            {this.props.movie.overview}
            </div>
            <div display='block'>
            <b>Release Date:</b> 
            </div>
            <div className = 'overview-info' display='block'>
            {this.props.movie.releaseDate}
            </div>
            {movieWatchDisplay}
          </div>
        )
      } else {
        var movieInfo = (
          <div className = "movie-info">
          </div>
        )
      }

      if (display ==='watched' || display ==='toWatch') {
        var movieDisplay = (
          <div className="movie-list-entry">
            <div className="movie-list-entry-title" onClick={this.handleInfoDisplay.bind(this)}>
              {this.props.movie.title}
            </div>
            {movieInfo}
          </div>
        )
      }
      
      return (
        <div>
          {movieDisplay}
        </div>
      )
  }
}