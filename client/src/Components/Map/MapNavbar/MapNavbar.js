import { useState } from "react";
import styles from "./MapNavbar.module.css";

const MapNavbar = ({ onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchTerm);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => onSubmit(e)} className={styles.form}>
        <input
          className={styles.formInput}
          type="text"
          name="search"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default MapNavbar;
