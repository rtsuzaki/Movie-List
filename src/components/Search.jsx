class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
        }
    }

    handleSearchChange(e) {
      this.setState({searchInput: e.target.value});
    }

    render() {
      return (
        <div className="block">
          <div className="search-bar form-inline">
              <input
              className="form-control"
              type="text"
              onChange={this.handleSearchChange.bind(this)}
              />
              <button className="btn hidden-sm-down" onClick={() => this.props.searchMovies(this.state.searchInput)}>
                <span className="glyphicon glyphicon-search"></span>
              </button>
          </div>
        </div>
      )
    }
}

window.Search = Search;