import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Form } from 'react-bootstrap';

import { Component } from 'react';


export class Preferences extends Component {
  render() {
    return (
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
    );
  }
}
