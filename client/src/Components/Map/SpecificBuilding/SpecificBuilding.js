import React from "react";
import { Marker } from "react-map-gl";
import styles from "../Map.module.css";

const SpecificBuilding = ({building}) => {
  return (
    <>
      <Marker latitude={building.latitude} longitude={building.longitude}>
        <button className={styles.markerButton}>
          <i className="fas fa-map-pin"></i>
        </button>
      </Marker>
    </>
  );
};

export default SpecificBuilding;
