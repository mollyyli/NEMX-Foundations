import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
//import FrontPage from './components/FrontPage';
import Test from './components/Test'; 




const App=({db}) => {
  console.log(db);
  return (
   <>
    <Test databaseref={db}/>
    </>
  );

//<FrontPage/>
}

export default App;
