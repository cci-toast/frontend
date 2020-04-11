import React from "react";
import Style from "style-it";

import ClientListEntry from "../client-list-entry";

class ClientsContent extends React.Component {
  render() {
    const styles = `
    .container {
      height: calc(90vh - 5.5rem);
      overflow: scroll;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="container">
        <ClientListEntry
          firstName="John"
          middleName="Joseph"
          lastName="Smith"
        />
        <ClientListEntry firstName="Sarah" middleName="" lastName="Porter" />
        <ClientListEntry
          firstName="John"
          middleName="Joseph"
          lastName="Smith"
        />
        <ClientListEntry firstName="Sarah" middleName="" lastName="Porter" />
        <ClientListEntry
          firstName="John"
          middleName="Joseph"
          lastName="Smith"
        />
        <ClientListEntry firstName="Sarah" middleName="" lastName="Porter" />
        <ClientListEntry
          firstName="John"
          middleName="Joseph"
          lastName="Smith"
        />
        <ClientListEntry firstName="Sarah" middleName="" lastName="Porter" />
        <ClientListEntry
          firstName="John"
          middleName="Joseph"
          lastName="Smith"
        />
        <ClientListEntry firstName="Sarah" middleName="" lastName="Porter" />
        <ClientListEntry
          firstName="John"
          middleName="Joseph"
          lastName="Smith"
        />
        <ClientListEntry firstName="Sarah" middleName="" lastName="Porter" />
        <ClientListEntry
          firstName="John"
          middleName="Joseph"
          lastName="Smith"
        />
        <ClientListEntry firstName="Sarah" middleName="" lastName="Porter" />
      </div>
    );
  }
}

export default ClientsContent;
