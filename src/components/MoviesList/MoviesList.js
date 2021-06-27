import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import CardPreview from "../CardPreview";
import Container from "../Container";
import styles from "./MoviesList.module.css";

const MoviesList = ({ movies, location }) => (
  <Container>
    <ul className={styles.MoviesList}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.MovieListItem}>
          <Link
            className={styles.MovieLink}
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            <CardPreview {...movie} />
          </Link>
        </li>
      ))}
    </ul>
  </Container>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired
  ).isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(MoviesList);
