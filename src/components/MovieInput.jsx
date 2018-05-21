class MovieInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addInput:'',
    }
  }

  handleInputChange(e) {
    this.setState({addInput: e.target.value});
  }

  render() {
      return(
        <div className="block">  
            <div className="search-bar form-inline">
            <input
                className="form-control"
                type="text"
                onChange={this.handleInputChange.bind(this)}
                />
                <button className="btn hidden-sm-down" onClick={() => this.props.addMovie(this.state.addInput)}>
                <span className="glyphicon glyphicon-plus"></span>
                </button>
            </div>
        </div>
      )
  }
}

window.MovieInput = MovieInput;