import React from "react";
import Style from "style-it";

import ToastIcon from "../toast/toast-icon";

class ToastEmpty extends React.Component {
  render() {
    const styles = `
    .wrapper {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 2rem;
    }

    .header {
        padding-top: 1rem;
    }

    .caption {
        width: 40rem;
        line-height: 1.5rem;
        text-align: center;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="wrapper">
        <ToastIcon
          name="telescope"
          width={80}
          height={80}
          stroke="none"
          fill="url(#grad)"
        />
        <h3 className="header">{this.props.header}</h3>
        <p className="caption">{this.props.caption}</p>
      </div>
    );
  }
}
export default ToastEmpty;
