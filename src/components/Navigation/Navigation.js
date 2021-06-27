import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav>
    <ul className={styles.NavList}>
      <li className={styles.NavItem}>
        <NavLink
          exact
          to={routes.home}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          HomePage
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.movies}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          MoviesPage
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
