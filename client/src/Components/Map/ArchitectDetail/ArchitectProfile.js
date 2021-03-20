import React from "react";
import architectImage from "../../../Images/architect.jpg";
import styles from "../Map.module.css";

const ArchitectProfile = ({ architect }) => {
  return (
    <div>
      <div className={styles.detailsContainer}>
        <div className={styles.imgContainer}>
          <img
            className={styles.imageArch}
            src={architectImage}
            alt="Building"
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
            <p className={styles.item}>{architect.died}</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Nationality</h3>
            <p className={styles.item}>{architect.nationality}</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Buildings</h3>
            <p className={styles.item}>{architect.buildings}</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Awards</h3>
            <p className={styles.item}>{architect.awards}</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Well Known for</h3>
            <p className={styles.item}>{architect.wellKnownFor}</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Source</h3>
            <a href={architect.readMore}>
              <p className={styles.item}>Visit for more info</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectProfile;
