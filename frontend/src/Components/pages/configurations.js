import React from "react";
import Style from "style-it";

import PageTemplate from "../page-template";

class Configurations extends React.Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <PageTemplate user="advisor" page="configs"></PageTemplate>
      </React.Fragment>
    );
  }
}

export default Configurations;
