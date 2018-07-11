import React from "react";
import ReactDOM from "react-dom";
import Movie from "./Movie.jsx";

const MovieList = (props) => (
    <div>
        {props.movies.map( (item, ind) =>
        <Movie movie={item} key={ind} />
      )}
    </div>
);

export default MovieList;
