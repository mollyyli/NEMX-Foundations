import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

// test
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// remove for now
//ReactDOM.render(<App />, document.getElementById('root'));

// added for test
const firebaseConfig = {
    apiKey: "AIzaSyCINL3Tc4NsnpM9LGtlRs05C_77ayJttB4",
    authDomain: "nemx-798a7.firebaseapp.com",
    databaseURL: "https://nemx-798a7.firebaseio.com",
    projectId: "nemx-798a7",
    storageBucket: "nemx-798a7.appspot.com",
    messagingSenderId: "382671281750",
    appId: "1:382671281750:web:4f14806e709971dd3365f7",
    measurementId: "G-DQ9MSL7NED"
  };
firebase.initializeApp(firebaseConfig);
var ref = firebase.database().ref();

console.log(ref);
ReactDOM.render((
        <App db={ref}/>
    ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
