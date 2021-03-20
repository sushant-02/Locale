import React from "react";
import styles from "./Register.module.css";

const RegisterArchitect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.head}>Register Architect</h2>
        <form className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Name<sup>*</sup>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Enter Architect's name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label id="date-label" for="number">
              Date of Birth<sup>*</sup>
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className={styles.formControl}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label id="date-label" for="number">
              Date of Death ( if not alive )
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className={styles.formControl}
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Nationality<sup>*</sup>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Nationality"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Awards
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="(If multiple separate by commas)"
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Well known for<sup>*</sup>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Well known for"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Source<sup>*</sup>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="website link"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <button type="submit" id="submit" className={styles.submitButton}>
              {" "}
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterArchitect;
