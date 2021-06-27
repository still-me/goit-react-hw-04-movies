import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import defaultImage from "../../images/default.jpeg";
import routes from "../../routes";
import styles from "./MovieCard.module.css";

const MovieCard = ({ handleGoBack, movie, location }) => {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
    id: movieId,
  } = movie;
  return (
    <div className={styles.Card}>
      <button
        className={styles.GoBackButton}
        type="button"
        onClick={handleGoBack}
      >
        Go Back
      </button>

      <div className={styles.CardInfo}>
        <div className={styles.CardImageThumb}>
          <img
            src={
              poster_path === null
                ? defaultImage
                : `https://www.themoviedb.org/t/p/w500${poster_path}`
            }
            alt={title}
          />
        </div>
        <div className={styles.CardDetailsThumb}>
          <h1>{`${title} (${release_date.slice(0, 4)})`}</h1>
          <p>User score: {vote_average * 10}%</p>
          <h2>Overview</h2>
          <p className={styles.Overview}>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className={styles.DetailsList}>
        <li className={styles.ListItem}>
          <NavLink
            className={styles.Link}
            activeClassName={styles.LinkActive}
            to={{
              pathname: `${routes.movies}/${movieId}/cast`,
              state: {
                from: location,
              },
            }}
          >
            <p>Casts</p>
          </NavLink>
        </li>
        <li className={styles.ListItem}>
          <NavLink
            className={styles.Link}
            activeClassName={styles.LinkActive}
            to={{
              pathname: `${routes.movies}/${movieId}/reviews`,
              state: {
                from: location,
              },
            }}
          >
            <p>Reviews</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

MovieCard.propTypes = {
  handleGoBack: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default withRouter(MovieCard);
