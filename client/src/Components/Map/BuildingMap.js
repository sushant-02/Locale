import React, {useState} from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import BuildingProfile from "./BuildingProfile";

import styles from './Map.module.css';

const BuildingMap = ({ building }) => {
  const [viewport, setViewport] = useState({
    latitude: building.lat,
    longitude: building.long,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle="mapbox://styles/mapbox/dark-v10"
      >
        <Marker latitude={building.lat} longitude={building.long}>
          <button className={styles.markerButton} onClick={() => {setSelectedBuilding(() => {return building})}} >
            <i className="fas fa-map-pin"></i>
          </button>
        </Marker>
      </ReactMapGL>
      {selectedBuilding && <BuildingProfile building={selectedBuilding} onCrossClick={setSelectedBuilding} />}
    </div>
  );
};

export default BuildingMap;
