import styles from "./ButtonNames.module.css";

const ButtonNames = ({ buttonNames, onButtonClick }) => {
  return (
    <>
      <div className={styles.buttons}>
        {buttonNames.map((name) => (
          <button
            key={name}
            className={styles.button}
            onClick={() => onButtonClick(name)}
          >
            {name}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonNames;
