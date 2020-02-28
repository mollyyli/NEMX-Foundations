import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// test
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// remove for now
//ReactDOM.render(<App />, document.getElementById('root'));

// added for test
ReactDOM.render((
    <Router>
        <App />
    </Router>
    ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
