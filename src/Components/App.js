import React from 'react';
import styles from './App.module.css';
import Map from './Map/Map';
import Navbar from './Navbar/Navbar';
import Landing from './Landing/Landing';
import Features from '../Components/Features/Features';
import HowToUse from './HowToUse/HowToUse';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Landing />
      <Features />
      <HowToUse />
      <Footer />
      {/* <Map /> */}
    </div>
  );
}

export default App;