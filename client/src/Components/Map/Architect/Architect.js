import React from "react";
import { Marker } from "react-map-gl";
import styles from "../Map.module.css";

const Architect = ({ buildings, onSelect, setShowArchitect, setIsBuildingSelected }) => {
  const renderedMarkers = buildings.map((building) => {
    return (
      <Marker latitude={building.latitude} longitude={building.longitude}>
        <button className={styles.markerButton} onClick={e => {
          onSelect(building)
          setShowArchitect(false)
          setIsBuildingSelected(true)
        }}>
          <i className="fas fa-map-pin"></i>
        </button>
      </Marker>
    );
  });

  return <>{renderedMarkers}</>;
};

export default Architect;
