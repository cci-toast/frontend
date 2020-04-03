import React from "react";
import Style from "style-it";

import PageTemplate from "../page-template";

class AdvisorContact extends React.Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <PageTemplate user="client" page="advisorcontact"></PageTemplate>
      </React.Fragment>
    );
  }
}

export default AdvisorContact;
