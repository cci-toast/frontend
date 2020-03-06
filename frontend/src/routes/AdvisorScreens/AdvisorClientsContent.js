import React from "react";
import Clientbox from "../Components/Clientbox";

class AdvisorClientsContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h4 className="title">Your Clients</h4>
        <Clientbox clientName="John Smith" />
        <Clientbox clientName="Blah Blah" />
      </React.Fragment>
    );
  }
}

export default AdvisorClientsContent;
