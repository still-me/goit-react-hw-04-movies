import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";

const ReactLoader = () => (
  <div className={styles.Loader}>
    <Loader type="Grid" color="#4682B4" height={100} width={100} />
  </div>
);

export default ReactLoader;
