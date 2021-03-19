import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import HomePage from "./HomePage/HomePage";
import Map from "./Map/Map";
import Register from './Register/Register';

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/map" exact component={Map} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
