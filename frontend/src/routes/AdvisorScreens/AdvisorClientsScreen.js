import React, { Component } from "react";
import Style from "style-it";

import ScreenTemplateComponent from "../Components/ScreenTemplateComponent";

class AdvisorClientsScreen extends Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <ScreenTemplateComponent advisor clients></ScreenTemplateComponent>
      </React.Fragment>
    );
  }
}

export default AdvisorClientsScreen;
