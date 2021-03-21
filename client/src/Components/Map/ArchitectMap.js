import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import ArchitectProfile from "./ArchitectProfile";
import BuildingProfile from "./BuildingProfile";

import styles from "./Map.module.css";

const ArchitectMap = ({ architect }) => {
  const [viewport, setViewport] = useState({
    latitude: architect.buildings[0].lat,
    longitude: architect.buildings[0].long,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });
  const [isArchitectShown, setIsArchitectShown] = useState(true);
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const renderedMarkers = architect.buildings.map((building) => {
    return (
      <Marker
        latitude={building.lat}
        longitude={building.long}
        key={building.id}
      >
        <button className={styles.markerButton} onClick={() => {
          setSelectedBuilding(() => {
            return building;
          });
          setIsArchitectShown(false);
        }}>
          <i className="fas fa-map-pin"></i>
        </button>
      </Marker>
    );
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle="mapbox://styles/mapbox/dark-v10"
      >
        {renderedMarkers}
      </ReactMapGL>
      {isArchitectShown && (
        <ArchitectProfile
          architect={architect.architect}
          setIsArchitectShown={setIsArchitectShown}
        />
      )}
      {selectedBuilding && <BuildingProfile building={selectedBuilding} onCrossClick={setSelectedBuilding} />}
    </div>
  );
};

export default ArchitectMap;
