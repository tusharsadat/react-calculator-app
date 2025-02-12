import { useState } from "react";
import styles from "./App.module.css";
import ButtonNames from "./components/ButtonNames";
import Display from "./components/Display";

function App() {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  const [calVal, setCalVal] = useState("");
  const handleButtonClick = (name) => {
    console.log(name);
    if (name === "C") {
      setCalVal("");
    } else if (name === "=") {
      setCalVal(eval(calVal));
    } else {
      setCalVal(calVal + name);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display calVal={calVal} />
        <ButtonNames
          buttonNames={buttonNames}
          onButtonClick={handleButtonClick}
        />
      </div>
    </>
  );
}

export default App;
