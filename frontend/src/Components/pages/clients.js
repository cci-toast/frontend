import React from "react";
import Style from "style-it";

import PageTemplate from "../page-template";

class Clients extends React.Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <PageTemplate user="advisor" page="clients"></PageTemplate>
      </React.Fragment>
    );
  }
}

export default Clients;
