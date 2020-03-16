import React from "react";
import ClientboxComponent from "./ClientboxComponent";

class AdvisorClientsContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h4 className="title">Your Clients</h4>
        <ClientboxComponent clientName="John Smith" />
        <ClientboxComponent clientName="Blah Blah" />
      </React.Fragment>
    );
  }
}

export default AdvisorClientsContent;
