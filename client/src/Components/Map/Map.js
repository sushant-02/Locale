import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import BasicMap from './BasicMap';
import BuildingMap from './BuildingMap';
import ArchitectMap from "./ArchitectMap";

import logo from "../../Images/LogoLight.png";
import styles from "./Map.module.css";

const Map = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [architect, setArchitect] = useState(null);
  const [building, setBuilding] = useState(null);

  const getResponse = async () => {
    try {
      const res = await axios.get("/api/search", {
        params: { q: searchTerm },
      });

      if (res.status === 200) {
        if (res.data.building) {
          setBuilding(() => {
            return res.data.building;
          });

          setArchitect(() => {
            return null;
          });
        } else {
          setArchitect(() => {
            return res.data;
          });

          setBuilding(() => {
            return null;
          });
        }
      }
    } catch (e) {
      console.log("[getResponse] ", e);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setArchitect(() => {
      return null
    })
    setBuilding(() => {
      return null
    })
    if(searchTerm)
      getResponse();
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        {(!architect && !building) ? (<BasicMap />) : null}
        {(!architect && building) ? (<BuildingMap building={building} />) : null}
        {(architect && !building) ? (<ArchitectMap architect={architect} />) : null}

        <div className={styles.mapNav}>
          <div className={styles.navContainer}>
            <form
              onSubmit={(e) => handleSearchSubmit(e)}
              className={styles.form}
            >
              <input
                className={styles.formInput}
                type="text"
                placeholder="Search here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
        </div>

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
