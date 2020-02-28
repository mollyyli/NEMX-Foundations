import React from 'react';
import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">


      <div className="wrapper">
        <div className="form-wrapper">
          <h1>User's Preferences</h1>
            <form>
              <div className="familySize">
                <label htmlFor="familySize">Family Size</label>
                <input
                  placeholder="Family Size"
                  type="text"
                  name="familySize"
                />
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                />
              </div>
              <div className="next">
                <button type="submit">Next</button>
              </div>
            </form>
          </div>
        </div>

    </div>
  );
}

export default App;




/*

<div className="wrapper">
        <div className="form-wrapper">
          <h1>User's Preferences</h1>
            <form>
              <div className="familySize">
                <label htmlFor="familySize">Family Size</label>
                <input
                  placeholder="Family Size"
                  type="text"
                  name="familySize"
                />
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                />
              </div>
              <div className="next">
                <button type="submit">Next</button>
              </div>
            </form>
          </div>
        </div>

*/



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

