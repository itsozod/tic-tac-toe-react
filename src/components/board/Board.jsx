/* eslint-disable react/prop-types */
import styles from "./Board.module.css";

export const Board = ({ value, onClick }) => {
  return (
    <div className={styles.board} onClick={onClick}>
      <p
        style={{ color: value === "X" ? "red" : "green" }}
        className={styles.weapon}
      >
        {value}
      </p>
    </div>
  );
};
