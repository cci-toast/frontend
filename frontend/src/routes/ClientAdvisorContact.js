import React, { Component } from "react";

class ClientAdvisorContact extends Component {
  render() {
    return (
      <main className="section">
       <h4 className="black-text" style={{ fontWeight: "bold" }}>Your Advisor Contact Information </h4>
        <label>Name</label>
        <p>Advisor Name Placeholder </p>
        <label>Email</label>
        <p><a href="mailto:" target="blank_">Advisor Email Placeholder </a> </p>
        
        </main>
    )
  }
}
export default ClientAdvisorContact;