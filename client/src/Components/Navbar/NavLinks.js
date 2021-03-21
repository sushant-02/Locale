import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.linkList}>
        <Link to="/map">
          <li className={styles.listItem}>
            Map
            <span className={styles.listItemBorder}></span>
          </li>
        </Link>
        <li className={styles.listItem}>
          <a href="#features">Features</a>
          <span className={styles.listItemBorder}></span>
        </li>
        <li className={styles.listItem}>
          <a href="#howToUse">How to use</a>
          <span className={styles.listItemBorder}></span>
        </li>
        <li className={styles.listItem}>
          <a href="#contact">Contact</a>
          <span className={styles.listItemBorder}></span>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
