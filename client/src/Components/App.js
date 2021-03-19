import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import HomePage from "./HomePage/HomePage";
import Map from "./Map/Map";
import RegisterArchitect from './Register/RegisterArchitect';
import RegisterBuilding from './Register/RegisterBuilding';

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/map" exact component={Map} />
          <Route path="/registerArchitect" exact component={RegisterArchitect} />
          <Route path="/registerBuilding" exact component={RegisterBuilding} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
