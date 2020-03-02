import React from 'react';
import logo from './pics/logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Form } from 'react-bootstrap';
import Diet from './pics/diet.svg'

// import { Component } from 'react';
import Preferences from './components/Preferences';
import NavBar from './components/Navbar'
function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <Preferences />
        <img src={Diet} style={{marginTop: "100px"}}/>
      </div>

    </div>
  );
}

export default App;


