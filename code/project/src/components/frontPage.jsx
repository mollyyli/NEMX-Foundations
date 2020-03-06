import React, { Component } from 'react';


class FrontPage extends Component {
    state = {
      firstName: ""
    }
    handlState = e =>  {
      this.setState({
        firstName: e.target.value
      });
    }
    handlFireBase = e => {
      db.push(this.state)
    }
    render() {
        return (
                <div className="test">
                  <div className="wrapper">
                    <div className="form-wrapper">
                      <h1>Personal Information</h1>
                        <form>
                          <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input
                              placeholder="First Name"
                              type="firstName"
                              name="firstName"
                            />
                          </div>
                          <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                              placeholder="Last Name"
                              type="lastName"
                              name="lastName"
                              onChange = {this.handlState}
                            />
                          </div>
                          <div className="room">
                            <label htmlFor="room">Room Number</label>
                            <input
                              placeholder="Room Number"
                              type="room"
                              name="room"
                            />
                          </div>
                          <div className="phone">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                              placeholder="Phone Number"
                              type="phone"
                              name="phone"
                            />
                          </div>
                          <div className="submit">
                            <button type="submit">Submit</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
        );
    }
}

export default FrontPage;