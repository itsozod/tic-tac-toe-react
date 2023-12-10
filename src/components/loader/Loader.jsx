import styles from "./Loader.module.css";
export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <img className={styles.loaderGif} src="public/tictacgif.gif" alt="TicTacToe" />
      <h2 className={styles.loader_title}>Loading...</h2>
    </div>
  );
};
