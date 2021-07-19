import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialLinks}>
          <a href="https://twitter.com/DevelopsLocale" target="_blank" rel="noreferrer">
            <div className={styles.linkWrapper}> <i className={` ${styles.link} fab fa-twitter`}></i> </div>
          </a>
          <a href="https://www.instagram.com/locale.developers/" target="_blank" rel="noreferrer">
            <div className={styles.linkWrapper}> <i className={` ${styles.link} fab fa-instagram`}></i> </div>
          </a>
          <a href="https://www.facebook.com/theLocaleDevelopers" target="_blank" rel="noreferrer">
            <div className={styles.linkWrapper}> <i className={` ${styles.link} fab fa-facebook-f`}></i> </div>
          </a>
          <a href="mailto:locale.developers@gmail.com">
            <div className={styles.linkWrapper}> <i className={` ${styles.link} fas fa-envelope`}></i> </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
