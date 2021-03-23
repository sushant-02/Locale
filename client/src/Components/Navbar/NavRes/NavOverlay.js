import React from "react";
import { Link } from "react-router-dom";

import styles from "./NavResponsive.module.css";

const NavOverlay = ({ setIsOpen }) => {
  return (
    <div className={styles.overlayContainer}>
      <ul className={styles.itemList}>
        <Link to="/map" onClick={() => {
            setIsOpen(() => {
              return false;
            });
          }}>
          <li className={styles.item}>
            Map
          </li>
        </Link>
        <li
          className={styles.item}
          onClick={() => {
            setIsOpen(() => {
              return false;
            });
          }}
        >
          <a href="#features">Features</a>
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setIsOpen(() => {
              return false;
            });
          }}
        >
          <a href="#howToUse">How to use</a>
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setIsOpen(() => {
              return false;
            });
          }}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavOverlay;
