/* eslint-disable react/prop-types */
import styles from "./Restart.module.css";
export const Restart = ({ onClick }) => {
  return (
    <div className={styles.restartContainer}>
      <button onClick={onClick} className={styles.restartBtn}>
        Restart
      </button>
    </div>
  );
};
