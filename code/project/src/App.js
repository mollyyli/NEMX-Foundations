import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import FrontPage from './components/frontPage'
import firebase from 'firebase/app';



function App() {
  return (
    <React.Fragment>
    <FrontPage/>
    </React.Fragment>
  );
}

export default App;
