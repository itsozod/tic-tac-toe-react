import styles from "./Result.module.css";
export const Result = ({ result }) => {
  return (
    <div className={styles.resultContainer}>
      <h3 className={styles.result_title}>{result}</h3>
    </div>
  );
};
