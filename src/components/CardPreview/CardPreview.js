import PropTypes from "prop-types";

import defaultImage from "../../images/default.jpeg";
import styles from "./CardPreview.module.css";

const CardPreview = ({ title, poster_path, release_date }) => (
  <>
    <div className={styles.CardPreviewThumb}>
      <img
        src={
          poster_path === null
            ? defaultImage
            : `https://www.themoviedb.org/t/p/w300${poster_path}`
        }
        alt={title}
      />
    </div>

    <p className={styles.CardPreviewTitle}>
      {title} {release_date && <span>({release_date.slice(0, 4)})</span>}
    </p>
  </>
);

CardPreview.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  release_date: PropTypes.string.isRequired,
};

export default CardPreview;
