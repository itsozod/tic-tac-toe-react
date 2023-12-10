/* eslint-disable react/prop-types */
import styles from "./Board.module.css";
export const Board = ({ value, onClick }) => {
  return (
    <div className={styles.board} onClick={onClick}>
      {value}
    </div>
  );
};
