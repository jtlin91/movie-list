import React from "react";
import ReactDOM from "react-dom";
import MovieList from "./MovieList.jsx";
import Search from "./Search.jsx";
import movies from "./data/movies";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { movies: movies };

    this.Search = this.Search.bind(this);
    //maybe move this

  }

  Search(e) {
    // function handleClick(e) {
    let term = e.target.value.toLowerCase();
    let results = [];
    for (var i = 0; i < movies.length; i++) {
      if (movies[i]['title'].toLowerCase().includes(term)) {
        results.push(movies[i]);
      }
    }
    this.setState( {movies: results} );
    // }
  }

  render() {
    return (
        <div>
          <h1>MovieList</h1>
          <Search handleClick={this.Search}/>
          <MovieList movies={this.state.movies} />
        </div>
    );
  }
}
export default App;
