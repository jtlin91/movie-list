import React from "react";
import ReactDOM from "react-dom";
import Movie from "./Movie.jsx";

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {  display: false };

    this.Watched = this.Watched.bind(this);
    this.toWatch = this.toWatch.bind(this);
  }

  Watched() {
    this.setState( {display: true} );
  }

  toWatch() {
    this.setState( {display: false} );
  }

  render() {
    return (
      <div>
        <button onClick={this.Watched}>Watched</button>
        <button onClick={this.toWatch}>To Watch</button>

        {this.state.display === false &&
          <h3>UnWatched</h3> }
        {this.state.display === true &&
          <h3>Watched</h3> }

        {this.state.display === false &&
          this.props.movies.map( (item, ind) => {
            if (item.watched === false) {
              return <Movie movie={item} key={ind} />
            }
          }
        )}
        {this.state.display === true &&
          this.props.movies.map( (item, ind) => {
            if (item.watched === true) {
              return <Movie movie={item} key={ind} />
            }
          }
        )}
      </div>
    )
  }
}

export default MovieList;
