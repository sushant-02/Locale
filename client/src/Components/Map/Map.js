import { useState } from "react";
import { Link } from 'react-router-dom';
import ReactMapGL, { Marker } from "react-map-gl";
import MapNavbar from "./MapNavbar/MapNavbar";
import building from "../../Images/building.jpg";
import architect from "../../Images/architect.jpg";
import logo from '../../Images/LocaleLogoLight.png';
import styles from "./Map.module.css";

const hideDetail = () => {
  document
    .querySelector(`.${styles.cross}`)
    .classList.toggle(`${styles.crossUp}`);
  document
    .querySelector(`.${styles.crossItem1}`)
    .classList.toggle(`${styles.rotateCross1}`);
  document
    .querySelector(`.${styles.crossItem2}`)
    .classList.toggle(`${styles.rotateCross2}`);
};

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 23.18974,
    longitude: 82.35394,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  const [isCrossOpen, setIsCrossOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isArchitect, setIsArchitect] = useState(false);
  const [isBuilding, setIsBuilding] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(viewport) => setViewport(viewport)}
          mapStyle= "mapbox://styles/mapbox/dark-v10"
        >
          <Marker latitude={23.18974} longitude={82.35394}>
            <button
              className={styles.markerButton}
              onClick={(e) => {
                setIsCrossOpen(true);
                setIsDetailOpen(true);
              }}
            >
              <i class="fas fa-map-pin"></i>
            </button>
          </Marker>
        </ReactMapGL>
        <div className={styles.mapNav}>
          <MapNavbar />
        </div>
        {isCrossOpen && (
          <div
            className={styles.cross}
            onClick={(e) => {
              hideDetail();
              setIsDetailOpen(!isDetailOpen);
            }}
          >
            <div className={`${styles.crossItem} ${styles.crossItem1}`}></div>
            <div className={`${styles.crossItem} ${styles.crossItem2}`}></div>
          </div>
        )}

        {isDetailOpen && isBuilding && (
          <div className={styles.detailsContainer}>
            <div className={styles.imgContainer}>
              <img className={styles.image} src={building} alt="Building" />
            </div>
            <div className={styles.titleContainer}>
              <h2>Heydar Aliyev Center</h2>
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
                <p className={styles.item}>
                  Started in 2007, Completed in 2012
                </p>
              </div>
              <div className={styles.descItem}>
                <h3 className={styles.item}>Status</h3>
                <p className={styles.item}>Complete</p>
              </div>
              <div className={styles.descItem}>
                <h3 className={styles.item}>Read more</h3>
                <p className={styles.item}>
                  https://xyz.com/heydarAliyevCenter
                </p>
              </div>
            </div>
          </div>
        )}
        {isDetailOpen && isArchitect && (
          <div className={styles.detailsContainer}>
            <div className={styles.imgContainer}>
              <img className={styles.imageArch} src={architect} alt="Building" />
            </div>
            <div className={styles.titleContainer}>
              <h2>Ar. Zaha Hadid</h2>
            </div>
            <div className={styles.descContainer}>
              <div className={styles.descItem}>
                <h3 className={styles.item}>Born</h3>
                <p className={styles.item}>31 OCT 1950</p>
              </div>
              <div className={styles.descItem}>
                <h3 className={styles.item}>Died</h3>
                <p className={styles.item}>31 March 2016</p>
              </div>
              <div className={styles.descItem}>
                <h3 className={styles.item}>Nationality</h3>
                <p className={styles.item}>Iraq, UK</p>
              </div>
              <div className={styles.descItem}>
                <h3 className={styles.item}>Buildings</h3>
                <p className={styles.item}>
                  Vitra Fire Station, Bridge Pavillion, Heydar Aliyev Center
                </p>
              </div>
              <div className={styles.descItem}>
                <h3 className={styles.item}>Awards</h3>
                <p className={styles.item}>
                  Pritzker, Sterling, Jane Dew, Premium Imperial
                </p>
              </div>
              <div className={styles.descItem}>
                <h3 className={styles.item}>Well Known for</h3>
                <p className={styles.item}>Curvilinear Buildings</p>
              </div>
              <div className={styles.descItem}>
                <h3 className={styles.item}>Read more</h3>
                <p className={styles.item}>
                  https://xyz.com/heydarAliyevCenter
                </p>
              </div>
            </div>
          </div>
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