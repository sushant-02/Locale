import React from "react";

import styles from "./Map.module.css";

const ArchitectProfile = ({ architect, setIsArchitectShown }) => {

  return (
    <div>
      <div className={styles.detailsContainer}>
        <div id="crossButton" className={styles.cross} onClick={() => setIsArchitectShown(false)}>
          <div id="crossItem1" className={`${styles.crossItem} ${styles.crossItem1}`}></div>
          <div id="crossItem2" className={`${styles.crossItem} ${styles.crossItem2}`}></div>
        </div>
        <div className={styles.imgContainer}>
          <img
            className={styles.imageArch}
            src={architect.imageURL}
            alt="Architect"
          />
        </div>
        <div className={styles.titleContainer}>
          <h2>{architect.name}</h2>
        </div>
        <div className={styles.descContainer}>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Born</h3>
            <p className={styles.item}>{architect.born}</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Died</h3>
            <p className={styles.item}>{architect.died || "-"}</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Nationality</h3>
            <p className={styles.item}>{architect.nationality}</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Buildings</h3>
            <p className={styles.item}>{architect.buildings || "-"}</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Awards</h3>
            <p className={styles.item}>{architect.awards || "-"}</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Well Known for</h3>
            <p className={styles.item}>{architect.knownFor}</p>
          </div>
          <div className={styles.descItemLink}>
            <a
              href={architect.website}
              target="_blank"
              rel="noreferrer"
              className={styles.itemLink}
            >
              <h3>Know More</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectProfile;
