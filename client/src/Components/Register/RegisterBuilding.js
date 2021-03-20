import React, { useState } from "react";
import axios from "axios";
import styles from "./Register.module.css";

const RegisterBuilding = () => {
  const [building, setBuilding] = useState({
    buildingName: "",
    name: "",
    architecturalStyle: "",
    location: "",
    lat: 0,
    long: 0,
    height: 1,
    area: 1,
    started: "",
    completed: "",
    status: "",
    imageURL: "",
    website: "",
  });

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/add-building", building);
      if (res.status !== 201) throw new Error("Something went wrong!");
    } catch (e) {
      console.log(e);
      alert("Something went wrong!!");
    }
  };

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
              value={building.buildingName}
              className={styles.formControl}
              placeholder="Enter Building's name"
              required
              onChange={(e) =>
                setBuilding({ ...building, buildingName: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Architect<sup>*</sup>
            </label>
            <input
              type="text"
              value={building.name}
              className={styles.formControl}
              placeholder="Architect must be already registered"
              required
              onChange={(e) =>
                setBuilding({ ...building, name: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Architectural Style<sup>*</sup>
            </label>
            <input
              type="text"
              value={building.architecturalStyle}
              className={styles.formControl}
              placeholder="e.g. Neo Futurism"
              required
              onChange={(e) =>
                setBuilding({ ...building, architecturalStyle: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Location<sup>*</sup>
            </label>
            <input
              type="text"
              value={building.location}
              className={styles.formControl}
              placeholder="City, Country"
              required
              onChange={(e) =>
                setBuilding({ ...building, location: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Latitude<sup>*</sup>
            </label>
            <input
              type="number"
              value={building.lat}
              className={styles.formControl}
              placeholder="in degrees"
              required
              onChange={(e) =>
                setBuilding({ ...building, lat: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Longitude<sup>*</sup>
            </label>
            <input
              type="number"
              value={building.long}
              className={styles.formControl}
              placeholder="in degrees"
              required
              onChange={(e) =>
                setBuilding({ ...building, long: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Height<sup>*</sup>
            </label>
            <input
              type="number"
              min="1"
              value={building.height}
              className={styles.formControl}
              placeholder="in metre"
              required
              onChange={(e) =>
                setBuilding({ ...building, height: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Area<sup>*</sup>
            </label>
            <input
              type="number"
              min="1"
              value={building.area}
              className={styles.formControl}
              placeholder="in square metre"
              required
              onChange={(e) =>
                setBuilding({ ...building, area: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Built (Started in)<sup>*</sup>
            </label>
            <input
              type="text"
              value={building.started}
              className={styles.formControl}
              placeholder="Started in year"
              required
              onChange={(e) =>
                setBuilding({ ...building, started: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Completed in (if complete)
            </label>
            <input
              type="text"
              value={building.completed}
              className={styles.formControl}
              placeholder="Completed in year"
              onChange={(e) =>
                setBuilding({ ...building, completed: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <p>
              Status<sup>*</sup>
            </p>
            <label>
              <input
                name="user-recommend"
                value="completed"
                type="radio"
                className={styles.inputRadio}
                checked={building.status === "completed"}
                onChange={(e) =>
                  setBuilding({ ...building, status: e.target.value })
                }
              />
              Completed
            </label>
            <label>
              <input
                name="user-recommend"
                value="incomplete"
                type="radio"
                className={styles.inputRadio}
                checked={building.status === "incomplete"}
                onChange={(e) =>
                  setBuilding({ ...building, status: e.target.value })
                }
              />
              Incomplete
            </label>
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Source<sup>*</sup>
            </label>
            <input
              type="text"
              value={building.website}
              className={styles.formControl}
              placeholder="website link"
              required
              onChange={(e) =>
                setBuilding({ ...building, website: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label id="name-label" for="name">
              Image URL<sup>*</sup>
            </label>
            <input
              type="text"
              value={building.imageURL}
              className={styles.formControl}
              placeholder="website link"
              required
              onChange={(e) =>
                setBuilding({ ...building, imageURL: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <button
              type="submit"
              id="submit"
              className={styles.submitButton}
              onClick={handleSubmit}
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

export default RegisterBuilding;
