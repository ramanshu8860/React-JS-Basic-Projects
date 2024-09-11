import React from "react";
import styles from "./Button.module.css";
const Button = ({
  clickHandler,
  buttonName,
  buttonColor,
  buttonTextColor,
  buttonFontSize,
  buttonFontWeight,
}) => {
  return (
    <button
      onClick={clickHandler}
      className={styles.button}
      style={{
        backgroundColor: buttonColor,
        color: buttonTextColor,
        fontSize: buttonFontSize,
        fontWeight: buttonFontWeight,
      }}
    >
      {buttonName}
    </button>
  );
};

export default Button;
