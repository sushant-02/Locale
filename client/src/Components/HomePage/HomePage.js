import React, { Fragment, useState } from "react";
import Navbar from "../Navbar/Navbar";
import NavResponsive from '../Navbar/NavRes/NavResponsive';
import NavOverlay from '../Navbar/NavRes/NavOverlay';
import Landing from "../Landing/Landing";
import Features from "../Features/Features";
import HowToUse from "../HowToUse/HowToUse";
import Footer from "../Footer/Footer";

import styles from './HomePage.module.css';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <div className={styles.navBig}>
        <Navbar />
      </div>
      <div className={styles.navSmall}>
        <NavResponsive isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {isOpen && <NavOverlay setIsOpen={setIsOpen} />}
      <Landing />
      <Features />
      <HowToUse />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
