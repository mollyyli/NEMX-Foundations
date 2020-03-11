import React, { useEffect } from "react";
import logo from "./pics/logo.svg";
import "./App.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "./redux/Actions";
// import { Component } from 'react';
import Preferences from "./pages/Preferences";
import Order from "./pages/Order";
const App = ({db}) => {
  const dispatch = useDispatch();
  dispatch(loadData());
  console.log(useSelector(state => console.log(state)));
  console.log(db)
  return (
    <Router>
      <div className="App">
        <Switch>    
          <Route path="/" exact component={() => <Preferences db = {db} />} />
          <Route path="/order" exact component={() => <Order db = {db} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
