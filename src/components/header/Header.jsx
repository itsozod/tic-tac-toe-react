import styles from "./Header.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>Tic-Tac-Toe</h1>
    </header>
  );
};
