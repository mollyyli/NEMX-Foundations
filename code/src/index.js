import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
/**
 * set up redux store
 */
import { Provider } from "react-redux";
import { createStore } from "redux";
import { cartReducer } from "./redux/Reducers/cartReducers";
import * as firebase from 'firebase';
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
var ref = firebase.database();
console.log(ref)
const store = createStore(cartReducer);
ReactDOM.render(
  <Provider store={store} >
    <App db = {ref} />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
