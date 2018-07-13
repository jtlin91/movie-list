import React from "react";
import ReactDOM from "react-dom";

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = { details: false }

    this.toggleWatch = this.toggleWatch.bind(this);
    this.details = this.details.bind(this);
  }


  toggleWatch() {
    this.props.movie.watched = !this.props.movie.watched;
    this.forceUpdate();
  }

  details() {
    this.setState( {details: !this.state.details} );
  }

  render() {
    return (
      <div>
        {this.props.movie.title}
        <button onClick={this.details}>Details</button>
        {this.state.details === true &&
          <div>
            <div>DETAILS: DETAILS</div>
            <div>DETAILS: MORE DETAILS</div>
            <button onClick={this.toggleWatch}>Watched</button>
          </div> }
        {this.props.movie.watched === true && <span>WATCHED</span>}
      </div>
    )
  }
}

export default Movie;
