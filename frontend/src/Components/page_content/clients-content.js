import React from "react";

import ClientListEntry from "../client-list-entry";

class ClientsContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ClientListEntry clientName="John Smith" />
        <ClientListEntry clientName="Blah Blah" />
      </React.Fragment>
    );
  }
}

export default ClientsContent;
