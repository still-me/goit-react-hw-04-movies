import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import * as moviesApi from "../services/movies-service";
import Reviews from "../components/Reviews";
import Cast from "../components/Cast";
import routes from "../routes";
import MovieCard from "../components/MovieCard";
import Container from "../components/Container";

class MovieDetailsPage extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    moviesApi
      .getMoviesInformation(movieId)
      .then((data) => {
        this.setState({ movie: data });
      })
      .catch((error) => console.log(error));
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    // if (location.state && location.state.from) {
    //   history.push(location.state.from);
    //   return;
    // }

    // history.push(routes.home);

    history.push(
      location?.state?.from?.state?.from || location?.state?.from || routes.home
    );
  };

  render() {
    const { movie } = this.state;
    const { credits, reviews } = movie;
    const { match } = this.props;
    const shouldMovieBeRendered = Object.keys(movie).length !== 0;

    return (
      <Container>
        {shouldMovieBeRendered && (
          <MovieCard handleGoBack={this.handleGoBack} movie={movie} />
        )}

        <Switch>
          <Route
            path={`${match.path}/cast`}
            render={(props) => <Cast {...props} cast={credits.cast} />}
          />
          <Route
            path={`${match.path}/reviews`}
            render={(props) => <Reviews {...props} reviews={reviews.results} />}
          />
        </Switch>
      </Container>
    );
  }
}

export default MovieDetailsPage;
