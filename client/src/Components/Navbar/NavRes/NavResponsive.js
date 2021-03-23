import React from 'react';
import { Sling as Hamburger } from 'hamburger-react';


import styles from './NavResponsive.module.css';
import logoLight from '../../../Images/LocaleLogoLight.png';

const NavResponsive = ({ isOpen, setIsOpen }) => {
  return (
    <div className={styles.container}> 
      <div className={styles.navbarWrapper}>
        <img className={styles.navbarLogo} src={logoLight} alt="Locale" />
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
    </div>
  )
}

export default NavResponsive