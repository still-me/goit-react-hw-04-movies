import React, { Component } from "react";
import queryString from "query-string";

import * as moviesApi from "../services/movies-service";
import MoviesList from "../components/MoviesList";
import SearchForm from "../components/SearchForm";

class MoviesView extends Component {
  state = {
    searchQuery: "",
    movies: [],
  };

  componentDidMount() {
    const queryParam = queryString.parse(this.props.location.search).query;
    if (queryParam) {
      this.fetchMovies(queryParam);
    }
  }

  fetchMovies = (query) => {
    moviesApi
      .getSearchMovies(query)
      .then((data) => this.setState({ movies: data }))
      .catch((error) => console.log(error))
      .finally(() => this.setState({ searchQuery: "" }));
  };

  onQueryChange = (query) => {
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: `query=${query}`,
    });
  };

  onInputChange = (e) => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { searchQuery } = this.state;

    this.onQueryChange(searchQuery);
    this.fetchMovies(searchQuery);
  };

  render() {
    const { searchQuery, movies } = this.state;
    return (
      <>
        <SearchForm
          onSubmit={this.onSubmit}
          onInputChange={this.onInputChange}
          searchQuery={searchQuery}
        />
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default MoviesView;
