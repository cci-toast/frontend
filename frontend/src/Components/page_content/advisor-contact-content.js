import React from "react";

class AdvisorContactContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label>Name</label>
        <p>Advisor Name Placeholder</p>
        <label>Email</label>
        <a href="mailto:" target="blank_">
          <p>Advisor Email Placeholder</p>
        </a>
        <label>Phone Number</label>
        <a href="tel:XXXXXXXXXX">
          <p>XXXXXXXXXX</p>
        </a>
        <label>Address</label>
        <p>
          XXX Address <br />
          City, State Zip
        </p>
      </React.Fragment>
    );
  }
}

export default AdvisorContactContent;
