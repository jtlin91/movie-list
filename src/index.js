import React from "react";
import ReactDOM from "react-dom";
import MovieList from "./App.jsx";
import movies from "./data/movies";

ReactDOM.render(<MovieList movies={movies}/>, document.getElementById("app"));
