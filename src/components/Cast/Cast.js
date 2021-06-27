import React, { Component } from "react";
import PropTypes from "prop-types";

import defaultImage from "../../images/default.jpeg";
import styles from "./Cast.module.css";

class Cast extends Component {
  state = {};
  render() {
    const { cast } = this.props;
    return (
      <ul className={styles.List}>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id} className={styles.ListItem}>
            <div className={styles.ImageThumb}>
              <img
                width="200"
                src={
                  profile_path === null
                    ? defaultImage
                    : `https://www.themoviedb.org/t/p/w200${profile_path}`
                }
                alt={name}
              />
            </div>

            <p>{name}</p>
            <p>({character})</p>
          </li>
        ))}
      </ul>
    );
  }
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Cast;
