import React from "react";
import Style from "style-it";

import ToastInput from "../../toast/toast-input";

import { connect } from "react-redux";

import { setPlanValue } from "../../../redux/actions";

import { getProtectionMultiplier } from "../../../redux/selectors";

class Protection extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.props.setPlanValue(name, value);
  }

  getClasses() {
    let classes = [""];

    if (this.props.currentStep !== 1) {
      classes.push("hide");
    }

    return classes.join(" ");
  }

  render() {
    const styles = `
    .hide {
      display: none;
    }

    .header {
      margin-bottom: 1.5rem;
    }

    .variable {
      color: var(--toast-purple-2);
    }

    hr {
      margin: 2rem 0;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()}>
        <h3 className="header">Formula</h3>
        <p>
          Target life insurance policy = annual income *{" "}
          <span className="variable">multiplier</span>
        </p>

        <hr />

        <ToastInput
          type="number"
          label="Multiplier"
          name="protectionFactor"
          placeholder="Type in the multiplier"
          min={0.0}
          step={0.01}
          value={this.props.protection}
          onChange={this.handleChange}
          helpText="Type in the multiplier for the life insurance policy."
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  protection: getProtectionMultiplier(state),
});

export default connect(mapStateToProps, { setPlanValue })(Protection);
