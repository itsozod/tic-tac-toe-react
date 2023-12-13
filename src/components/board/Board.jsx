/* eslint-disable react/prop-types */
import styles from "./Board.module.css";
import { memo } from "react";

export const Board = memo(function Board({ value, onClick }) {
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
});
