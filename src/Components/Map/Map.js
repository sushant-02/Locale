import MapNavbar from "./MapNavbar/MapNavbar";
import styles from "./Map.module.css";

const Map = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.mapNav}>
          <MapNavbar />
        </div>
      </div>
    </div>
  );
};

export default Map;
