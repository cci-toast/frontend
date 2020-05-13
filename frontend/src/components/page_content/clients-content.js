import React from "react";
import Style from "style-it";

import ClientListEntry from "../client-list-entry";
import ToastEmpty from "../toast/toast-empty";

import { connect } from "react-redux";
import { setSearchTerm } from "../../redux/actions";
import { getFilteredClients, getSearchTerm } from "../../redux/selectors";
import { fetchClients } from "../../redux/actions";

class ClientsContent extends React.Component {
  constructor(props) {
    super(props);

    this.props.fetchClients();
  }

  componentDidMount() {
    this.props.setSearchTerm("");
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

  getContent() {
    if (this.props.clients.length !== 0) {
      return <div className="container">{this.getClients()}</div>;
    } else {
      return (
        <ToastEmpty
          header="No Clients Found"
          caption="You currently do not have any clients or your search returned no clients."
        />
      );
    }
  }

  render() {
    const styles = `
    .container {
      height: calc(90vh - 5.5rem);
      overflow: scroll;
    }
    `;

    return Style.it(`${styles}`, this.getContent());
  }
}

const mapStateToProps = (state) => ({
  clients: getFilteredClients(state),
  searchTerm: getSearchTerm(state),
});

export default connect(mapStateToProps, {
  fetchClients,
  setSearchTerm,
})(ClientsContent);
