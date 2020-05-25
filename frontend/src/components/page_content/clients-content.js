import React from "react";
import Style from "style-it";

import ClientListEntry from "../client-list-entry";
import ToastEmpty from "../toast/toast-empty";
import ToastLoading from "../toast/toast-loading";

import { connect } from "react-redux";
import { setSearchTerm, setIsLoading } from "../../redux/actions";
import {
  getFilteredClients,
  getSearchTerm,
  isLoading,
} from "../../redux/selectors";
import { fetchClients } from "../../redux/actions";

class ClientsContent extends React.Component {
  constructor(props) {
    super(props);

    this.props.fetchClients();
    this.props.setIsLoading(true);
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
    if (this.props.isLoading) {
      return <ToastLoading />;
    } else if (this.props.clients.length !== 0 && !this.props.isLoading) {
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
  isLoading: isLoading(state),
});

export default connect(mapStateToProps, {
  fetchClients,
  setSearchTerm,
  setIsLoading,
})(ClientsContent);
