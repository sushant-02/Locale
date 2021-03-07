import React from 'react';
import Button from '../Button/Button';
import styles from './Landing.module.css';

const Landing = () => {
  return (  
    <div id="landing" className={styles.container}>
      <div className={styles.landing}>
        <h1 className={styles.heading}>We locate<br /> works of architects<br/> for you</h1>
        <div className={styles.button}>
          <Button text="Explore" />
        </div>
      </div>
    </div>
  )
}

export default Landing;
