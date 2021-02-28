import F1 from '../../Images/f1.jpg';
import F2 from '../../Images/f2.jpeg';
import F3 from '../../Images/f3.jpeg';
import styles from './Features.module.css';

const Features = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Features</h2>
        <div className={styles.featuresList}>
          <div>
            <img src={F2} alt="Feature 1" className={styles.feature} />
          </div>
          <div>
            <img src={F1} alt="Feature 2" className={styles.feature} />
          </div>
          <div>
            <img src={F3} alt="Feature 3" className={styles.feature} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;
