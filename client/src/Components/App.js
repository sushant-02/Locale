import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import HomePage from "./HomePage/HomePage";
import Map from "./Map/Map";

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/map" exact component={Map} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
