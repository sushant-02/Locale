import React from 'react';
import styles from './Button.module.css';

const Button = ({ text }) => {
  return (
    <div className={styles.container}>
      <a href="#">
        <span className={styles.button}>{text}</span>
      </a>
    </div>
  )
}

export default Button;
