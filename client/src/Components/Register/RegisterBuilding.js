import React from "react";
import styles from "./Register.module.css";

const RegisterBuilding = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.head}>Register Building</h2>
        <form className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Building Name<sup>*</sup>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Enter Building's name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Architect<sup>*</sup>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Architect must be already registered"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Architectural Style<sup>*</sup>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="e.g. Neo Futurism"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Location<sup>*</sup>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="City, Country"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Latitude<sup>*</sup>
            </label>
            <input
              type="number"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="in degrees"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Longitude<sup>*</sup>
            </label>
            <input
              type="number"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="in degrees"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Height<sup>*</sup>
            </label>
            <input
              type="number"
              min="1"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="in metre"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Area<sup>*</sup>
            </label>
            <input
              type="number"
              min="1"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="in square metre"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Built (Started in)<sup>*</sup>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Started in year"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Completed in (if complete)
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Completed in year"
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Status<sup>*</sup>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="complete / Incomplete"
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
            <label id="name-label" for="name">
              Image URL<sup>*</sup>
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

export default RegisterBuilding;
