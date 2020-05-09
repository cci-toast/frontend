import React from "react";
import Style from "style-it";

import ToastIcon from "./toast-icon";

class ToastDeleteButton extends React.Component {
  render() {
    const styles = `
    .icon {
        cursor: pointer;
        padding-bottom: 0.5rem;
        float: right;
    }
    `;

    return Style.it(
      `${styles}`,

      <div className="icon" onClick={this.props.handleClick}>
        <ToastIcon
          name="trash"
          width={24}
          height={24}
          stroke="var(--toast-red)"
          strokeWidth={2}
          title="Delete"
        />
      </div>
    );
  }
}
export default ToastDeleteButton;
