import React from 'react';
import NavLinks from './NavLinks';
import styles from './Navbar.module.css';
import logoLight from '../../Images/LocaleLogoLight.png';

const Navbar = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.navbarWrapper}>
        <img className={styles.navbarLogo} src={logoLight} alt="Locale" />
        <NavLinks />
      </div>
    </div>
  )
}

export default Navbar