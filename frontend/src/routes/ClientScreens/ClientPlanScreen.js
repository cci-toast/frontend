import React, { Component } from "react";
import Style from "style-it";

import ScreenTemplateComponent from "../Components/ScreenTemplateComponent";

class ClientPlanScreen extends Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <ScreenTemplateComponent client plan></ScreenTemplateComponent>
      </React.Fragment>
    );
  }
}

export default ClientPlanScreen;
