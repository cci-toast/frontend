import React from "react";
import ClientboxComponent from "./ClientboxComponent";

class AdvisorClientsContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ClientboxComponent clientName="John Smith" />
        <ClientboxComponent clientName="Blah Blah" />
      </React.Fragment>
    );
  }
}

export default AdvisorClientsContent;
