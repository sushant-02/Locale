import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import styles from './HowToUse.module.css';

const HowToUse = () => {
  return (
    <div id="howToUse" className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>How to use</h2>
        <div className={styles.howToUse}>
        </div>
        <Link to="/map">
          <div className={styles.button}>
            <Button text="Explore" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HowToUse;
