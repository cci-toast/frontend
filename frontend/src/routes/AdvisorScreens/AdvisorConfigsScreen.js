import React, { Component } from "react";
import Style from "style-it";

import ScreenTemplateComponent from "../Components/ScreenTemplateComponent";

class AdvisorConfigsScreen extends Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <ScreenTemplateComponent advisor configs></ScreenTemplateComponent>
      </React.Fragment>
    );
  }
}

export default AdvisorConfigsScreen;
