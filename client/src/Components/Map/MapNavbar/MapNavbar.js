import { useState } from 'react';
import styles from './MapNavbar.module.css';

const MapNavbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input className={styles.formInput} type="text" name="search" placeholder="Search here" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      </form>
    </div>
  )
}

export default MapNavbar;
