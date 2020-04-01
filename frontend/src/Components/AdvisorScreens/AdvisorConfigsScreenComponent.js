import React, { Component } from 'react';
import Style from 'style-it';

import ScreenTemplateComponent from '../ScreenTemplateComponent';

class AdvisorConfigsScreenComponent extends Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <ScreenTemplateComponent
          user='advisor'
          page='configs'
        ></ScreenTemplateComponent>
      </React.Fragment>
    );
  }
}

export default AdvisorConfigsScreenComponent;
