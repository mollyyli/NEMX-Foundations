import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';



function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Personal Information</h1>
            <form>
              <div className="First Name">
                <label htmlFor="firstName">First Name</label>
                <input
                  placeholder="First Name"
                  type="text"
                  name="firstName"
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
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                />
              </div>
              <div className="createAccount">
                <button type="submit">Create Account</button>
                <small>Already Have an Account?</small>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default App;
