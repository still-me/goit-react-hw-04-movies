import PropTypes from "prop-types";
import styles from "./SearchForm.module.css";

const SearchForm = ({ onSubmit, onInputChange, searchQuery }) => (
  <div className={styles.SearchBar}>
    <form className={styles.SearchForm} onSubmit={onSubmit}>
      <input
        className={styles.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        value={searchQuery}
        onChange={onInputChange}
      />
      <button className={styles.SearchFormButton} type="submit">
        Search
      </button>
    </form>
  </div>
);

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};
export default SearchForm;
