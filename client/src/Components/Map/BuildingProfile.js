import React from "react";

import styles from "./Map.module.css";

const BuildingProfile = ({building, onCrossClick}) => {
  return (
    <div>
      <div className={styles.detailsContainer}>
        <div className={styles.cross} onClick={() => {onCrossClick(null)}}>
          <div className={`${styles.crossItem} ${styles.crossItem1}`}></div>
          <div className={`${styles.crossItem} ${styles.crossItem2}`}></div>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.image} src={building.imageURL} alt="Building" />
        </div>
        <div className={styles.titleContainer}>
          <h2>{building.buildingName}</h2>
        </div>
        <div className={styles.descContainer}>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Architect</h3>
            <p className={styles.item}>{building.name || "-"}</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Architectural Style</h3>
            <p className={styles.item}>{building.architecturalStyle}</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Location</h3>
            <p className={styles.item}>{building.location}</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Height</h3>
            <p className={styles.item}>{building.height}m</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Area</h3>
            <p className={styles.item}>{building.area} Sq. m</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Built</h3>
            <p className={styles.item}>Started in {building.started}, Completed in {building.completed}</p>
          </div>
          <div className={styles.descItem}>
            <h3 className={styles.item}>Status</h3>
            <p className={styles.item}>{building.status}</p>
          </div>
          <div className={styles.descItemLink}>
            <a href={building.website} className={styles.itemLink}>
              <h3>Know More</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingProfile;
