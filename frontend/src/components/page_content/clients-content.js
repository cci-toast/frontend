import React from "react";
import Style from "style-it";

import ClientListEntry from "../client-list-entry";

import { connect } from "react-redux";
import { setSearchTerm } from "../../redux/actions";
import { getFilteredClients, getSearchTerm } from "../../redux/selectors";

class ClientsContent extends React.Component {
  componenDidMount() {
    this.props.setSearchTerm("");
    this.props.searchTerm = "";
  }

  getClients() {
    return this.props.clients.map((client) => {
      return (
        <ClientListEntry
          id={client.id}
          firstName={client.firstName}
          middleName={client.middleName}
          lastName={client.lastName}
          key={client.id}
        />
      );
    });
  }

  render() {
    const styles = `
    .container {
      height: calc(90vh - 5.5rem);
      overflow: scroll;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="container">{this.getClients()}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  clients: getFilteredClients(state),
  searchTerm: getSearchTerm(state),
});

export default connect(mapStateToProps, { setSearchTerm })(ClientsContent);
