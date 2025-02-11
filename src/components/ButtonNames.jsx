import styles from "./ButtonNames.module.css";

const ButtonNames = ({ buttonNames }) => {
  return (
    <>
      <div className={styles.buttons}>
        {buttonNames.map((name) => (
          <button key={name} className={styles.button}>
            {name}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonNames;
