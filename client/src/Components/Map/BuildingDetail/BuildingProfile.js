import React from "react";
import buildingImage from "../../../Images/building.jpg";
import styles from "../Map.module.css";

const BuildingProfile = ({ building, onCross }) => {
  return (
    <div>
      <div className={styles.detailsContainer}>
        <div
          className={styles.cross}
          onClick={(e) => {
            onCross(false);
          }}
        >
          <div className={`${styles.crossItem} ${styles.crossItem1}`}></div>
          <div className={`${styles.crossItem} ${styles.crossItem2}`}></div>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.image} src={buildingImage} alt="Building" />
        </div>
        <div className={styles.titleContainer}>
          <h2>{building.name}</h2>
        </div>
        <div className={styles.descContainer}>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Architect</h3>
            <p className={styles.item}>Zaha Hadid</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Architectural Style</h3>
            <p className={styles.item}>Neo Futurism</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Location</h3>
            <p className={styles.item}>Baku, Azerbaijan</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Height</h3>
            <p className={styles.item}>74m</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Area</h3>
            <p className={styles.item}>520 Sq. m</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Built</h3>
            <p className={styles.item}>Started in 2007, Completed in 2012</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Status</h3>
            <p className={styles.item}>Complete</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Source</h3>
            <p className={styles.item}>https://xyz.com/heydarAliyevCenter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingProfile;
