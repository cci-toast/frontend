import React, { Component } from "react";
import Style from "style-it";

import ScreenTemplateComponent from "../Components/ScreenTemplateComponent";

class ClientProfileScreen extends Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <ScreenTemplateComponent client profile></ScreenTemplateComponent>
      </React.Fragment>
    );
  }
}

export default ClientProfileScreen;
