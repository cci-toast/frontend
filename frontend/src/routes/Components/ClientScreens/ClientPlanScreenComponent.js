import React, { Component } from "react";
import Style from "style-it";

import ScreenTemplateComponent from "../ScreenTemplateComponent";

class ClientPlanScreenComponent extends Component {
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

export default ClientPlanScreenComponent;
