import React from "react";
import ReactDOM from "react-dom";
import Movie from "./Movie.jsx";

const Search = (props) => (
  <div>
    <input onChange={props.handleClick} type='text' placeholder='Search...'></input>
    <button>Search</button>
  </div>
)

export default Search;
