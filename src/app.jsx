import React from "react";
import ReactDOM from "react-dom";
import MovieList from "./MovieList.jsx";
import Search from "./Search.jsx";
import AddMovie from "./AddMovie.jsx";
import movies from "./data/movies";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {  movies: movies,
                    addmovie: ''  };

    this.Search = this.Search.bind(this);
    this.addName = this.addName.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  Search(e) {
    let term = e.target.value.toLowerCase();
    let results = [];
    for (var i = 0; i < movies.length; i++) {
      if (movies[i]['title'].toLowerCase().includes(term)) {
        results.push(movies[i]);
      }
    }
    this.setState( {movies: results} );
  }

  addName(e) {
    let name = e.target.value;
    let movie = {title: name, watched: false};
    this.setState( {addmovie: movie} );
  }

  addMovie() {
    let movie = this.state.addmovie;
    let state = this.state.movies;
    state.unshift(movie);
    this.setState( {movies: state} );
  }



  render() {
    return (
        <div>
          <h1>MovieList</h1>
          <Search handleClick={this.Search} />
          <AddMovie name={this.addName} add={this.addMovie} />
          <MovieList find={this.findMovie} movies={this.state.movies} />
        </div>
    );
  }
}
export default App;
