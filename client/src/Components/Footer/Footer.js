import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialLinks}>
          <a>
            <div className={styles.linkWrapper}> <i className={` ${styles.link} fab fa-twitter`}></i> </div>
          </a>
          <a>
            <div className={styles.linkWrapper}> <i className={` ${styles.link} fab fa-instagram`}></i> </div>
          </a>
          <a>
            <div className={styles.linkWrapper}> <i className={` ${styles.link} fab fa-facebook-f`}></i> </div>
          </a>
          <a>
            <div className={styles.linkWrapper}> <i className={` ${styles.link} fas fa-envelope`}></i> </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
