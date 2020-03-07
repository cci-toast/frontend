import React, { Component } from "react";

class ClientAdvisorContactContent extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <h3>Your Financial Advisor</h3> */}
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
          XXX Address <br />
          City, State Zip
        </p>
      </React.Fragment>
    );
  }
}

export default ClientAdvisorContactContent;
