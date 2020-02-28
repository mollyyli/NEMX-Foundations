import React from 'react';
import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Form } from 'react-bootstrap';

import { Component } from 'react';
import { Preferences } from './components/Preferences.js';

function App() {
  return (
    <div className="App">
      <Preferences />
    </div>
  );
}

export default App;



// test stff
/*class App extends Component {

  constructor(props) {
      super(props);
  }
  render() {
    return (
        <body>
            <header>
                <h1>Welcome to Benmo!</h1>
            </header> 
            <MobileNav/>
            <WebNav/>
            <Main />  
            <Switch> 
                <Route exact path='/home' component={HomePage} />
                <Route exact path='/about' component={AboutBenmo} />
                <Route path='/why-use' component={WhyUse} />
                <Route path='/sports' component={Sports} /> 
                <Route path='/#my-info' component={Footer} /> 
                <Route path='/bookmarks' component={Bookmarks} /> 
            </Switch>
            <Footer />
        </body>
    );
  }
}*/

