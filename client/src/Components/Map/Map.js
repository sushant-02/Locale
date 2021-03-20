import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMapGL, { Marker } from "react-map-gl";
import axios from "axios";
import MapNavbar from "./MapNavbar/MapNavbar";
import SpecificBuilding from "./SpecificBuilding/SpecificBuilding";
import Architect from "./Architect/Architect";
import ArchitectProfile from "./ArchitectDetail/ArchitectProfile";
import BuildingProfile from "./BuildingDetail/BuildingProfile";

import logo from "../../Images/LogoLight.png";
import styles from "./Map.module.css";

const Map = () => {
  const [architectBuildings, setArchitectBuildings] = useState([
    {
      name: "A",
      latitude: 19.9,
      longitude: 78.9,
      imgURL: "",
    },
    {
      name: "B",
      latitude: 20,
      longitude: 79,
      imgURL: "",
    },
  ]);
  const [building, setBuilding] = useState({
    // name: "A",
    // latitude: 20.1,
    // longitude: 79.1,
    // imgURL: "",
  });
  const [isArchitect, setIsArchitect] = useState(true);
  const [showArchitect, setShowArchitect] = useState(true);
  const [architect, setArchitect] = useState({
    name: "Zaha Hadid",
    born: "31 OCT 1950",
    died: "31 March 2016",
    nationality: "Iraq, UK",
    buildings: "Vitra Fire Station, Bridge Pavillion, Heydar Aliyev Center",
    awards: "Pritzker, Sterling, Jane Dew, Premium Imperial",
    wellKnownFor: "Curvilinear Buildings",
    readMore: "https://xyz.com/heydarAliyevCenter",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState({});
  const [isBuildingSelected, setIsBuildingSelected] = useState(false);

  const [viewport, setViewport] = useState({
    latitude: architectBuildings[0].latitude || building.latitude || 0,
    longitude: architectBuildings[0].longitude || 0,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  useEffect(() => {
    async function fetch() {
      try {
        const res = await axios.get("/api/search", {
          params: { q: searchTerm },
        });
        if (res.status === 200) {
          console.log(res.data);
          if (res.data.building) {
            setBuilding(res.data, building);
            setArchitect(null);
          }
        }
      } catch (e) {
        console.log(e);
        alert("Search failed!");
      }
    }

    if (searchTerm !== "") fetch();
  }, [searchTerm]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(viewport) => setViewport(viewport)}
          mapStyle="mapbox://styles/mapbox/dark-v10"
        >
          {isArchitect ? (
            <Architect
              buildings={architectBuildings}
              onSelect={setSelectedBuilding}
              setShowArchitect={setShowArchitect}
              setIsBuildingSelected={setIsBuildingSelected}
            />
          ) : (
            <SpecificBuilding
              building={building}
              onSelect={setSelectedBuilding}
            />
          )}
        </ReactMapGL>
        <div className={styles.mapNav}>
          <MapNavbar onSearchSubmit={setSearchTerm} />
        </div>
        {showArchitect && <ArchitectProfile architect={architect} />}
        {isBuildingSelected && (
          <BuildingProfile
            building={selectedBuilding}
            onCross={setIsBuildingSelected}
          />
        )}
        <Link to="/">
          <div className={styles.logoWrapper}>
            <img className={styles.logo} src={logo} alt="Locale" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Map;
