import React, { Component } from "react";
import Style from "style-it";

import ScreenTemplate from "../Components/ScreenTemplate";

class AdvisorClientsScreen extends Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <ScreenTemplate advisor clients></ScreenTemplate>
      </React.Fragment>
    );
  }
}

export default AdvisorClientsScreen;
