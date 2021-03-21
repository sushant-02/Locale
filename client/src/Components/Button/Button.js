import React from "react";
import styles from "./Button.module.css";

const Button = ({ text }) => {
  return (
    <div className={styles.container}>
      <span className={styles.button}>{text}</span>
    </div>
  );
};

export default Button;
