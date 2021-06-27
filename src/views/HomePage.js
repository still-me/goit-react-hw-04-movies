import React, { Component } from "react";

import * as moviesApi from "../services/movies-service";
import MoviesList from "../components/MoviesList";

class HomeView extends Component {
  state = {
    trendingMovies: [],
  };
  componentDidMount() {
    moviesApi
      .getTrendingMovies()
      .then((movies) => this.setState({ trendingMovies: movies }))
      .catch((error) => console.log(error));
  }
  render() {
    const { trendingMovies } = this.state;

    return <MoviesList movies={trendingMovies} />;
  }
}

export default HomeView;
