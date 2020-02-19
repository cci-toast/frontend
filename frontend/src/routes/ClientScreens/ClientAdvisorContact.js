import React, { Component } from "react";

class ClientAdvisorContact extends Component {
  render() {
    return (
      <div>
        <h4 className="title">Your Advisor Contact Information</h4>
        <label className="title">Name</label>
        <p>Advisor Name Placeholder </p>
        <label className="title">Email</label>
        <p>
          <a href="mailto:" target="blank_">
            Advisor Email Placeholder
          </a>
        </p>
        <label className="title">Phone Number</label>
        <p>
        <a href="tel:XXXXXXXXXX">XXXXXXXXXX</a>
        </p>
        <label className="title">Address</label>
        <p>
          XXX Address <br/>
          City, State Zip
        </p>
        </div>
    );
  }
}

export default ClientAdvisorContact;
