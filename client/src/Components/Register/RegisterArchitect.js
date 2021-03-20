import React, { useState } from "react";
import axios from "axios";
import styles from "./Register.module.css";

const RegisterArchitect = () => {
  const [architect, setArchitect] = useState({
    name: "",
    born: "",
    died: "",
    nationality: "",
    awards: [],
    knownFor: "",
    website: "",
  });

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/add-architect", architect);
      if (res.status !== 201) {
        throw new Error("OOps!");
      }
    } catch (e) {
      console.log(e);
      alert("Something went wrong!");
    }
  };

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
              className={styles.formControl}
              placeholder="Enter Architect's name"
              required
              onChange={(e) => {
                setArchitect({ ...architect, name: e.target.value });
              }}
              value={architect.name}
            />
          </div>
          <div className={styles.formGroup}>
            <label id="date-label" for="number">
              Date of Birth<sup>*</sup>
            </label>
            <input
              type="date"
              className={styles.formControl}
              required
              onChange={(e) => {
                setArchitect({ ...architect, born: e.target.value });
              }}
              value={architect.born}
            />
          </div>
          <div className={styles.formGroup}>
            <label id="date-label" for="number">
              Date of Death ( if not alive )
            </label>
            <input
              type="date"
              className={styles.formControl}
              onChange={(e) => {
                setArchitect({ ...architect, died: e.target.value });
              }}
              value={architect.died}
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Nationality<sup>*</sup>
            </label>
            <input
              type="text"
              className={styles.formControl}
              placeholder="Nationality"
              required
              onChange={(e) => {
                setArchitect({ ...architect, nationality: e.target.value });
              }}
              value={architect.nationality}
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Awards
            </label>
            <input
              type="text"
              className={styles.formControl}
              placeholder="(If multiple separate by commas)"
              onChange={(e) => {
                setArchitect({ ...architect, awards: e.target.value });
              }}
              value={architect.awards}
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Well known for<sup>*</sup>
            </label>
            <input
              type="text"
              className={styles.formControl}
              placeholder="Well known for"
              required
              onChange={(e) => {
                setArchitect({ ...architect, knownFor: e.target.value });
              }}
              value={architect.knownFor}
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Source<sup>*</sup>
            </label>
            <input
              type="text"
              className={styles.formControl}
              placeholder="website link"
              required
              onChange={(e) => {
                setArchitect({ ...architect, website: e.target.value });
              }}
              value={architect.website}
            />
          </div>
          <div className={styles.formGroup}>
            <button
              type="submit"
              id="submit"
              className={styles.submitButton}
              onClick={() => handleSubmit()}
            >
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
