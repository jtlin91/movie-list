import React from "react";
import ReactDOM from "react-dom";
import Movie from "./Movie.jsx";

const AddMovie = (props) => (
  <div>
    <input onChange={props.name} type='text'></input>
    <button onClick={props.add}>+</button>
  </div>
)

export default AddMovie;
