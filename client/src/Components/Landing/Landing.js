import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Landing.module.css';

const Landing = () => {
  return (  
    <div id="landing" className={styles.container}>
      <div className={styles.landing}>
        <h1 className={styles.heading}>We locate<br /> works of architects<br/> for you</h1>
        <Link to="/map">
          <div className={styles.button}>
            <Button text="Explore" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Landing;
