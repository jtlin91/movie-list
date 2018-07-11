import React from "react";
import ReactDOM from "react-dom";
import Movie from "./Movie.jsx";

const Search = (props) => (
  <div>
    <input onChange={props.handleClick} type='text'></input>
    <button onClick={props.handleClick}>Search</button>
  </div>
)

export default Search;
