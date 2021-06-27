import PropTypes from "prop-types";

import styles from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  const isReviewsEmpty = reviews.length < 1;

  return (
    <>
      {isReviewsEmpty ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul className={styles.List}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={styles.Review}>
              <h3 className={styles.Author}>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Reviews;
