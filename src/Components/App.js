import React from 'react';
import styles from './App.module.css';
import Navbar from './Navbar/Navbar';
import Landing from './Landing/Landing';

const App = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;