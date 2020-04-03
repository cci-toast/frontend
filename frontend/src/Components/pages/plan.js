import React from "react";
import Style from "style-it";

import PageTemplate from "../page-template";

class Plan extends React.Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <PageTemplate user="client" page="plan"></PageTemplate>
      </React.Fragment>
    );
  }
}

export default Plan;
