import React from "react";
import Style from "style-it";

import ToastInput from "../../toast/toast-input";

import { connect } from "react-redux";

import { getRetirementMultiplier } from "../../../redux/selectors";

import { setPlanValue } from "../../../redux/actions";

class Retirement extends React.Component {
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

    if (this.props.currentStep !== 3) {
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
          Target retirement savings = annual income *
          <span className="variable"> multiplier</span>
        </p>

        <hr />

        <ToastInput
          type="number"
          label="Multiplier"
          name="retirementFactor"
          placeholder="Type in the multiplier"
          min={0.0}
          step={0.01}
          value={this.props.retirement}
          onChange={this.handleChange}
          helpText="Type in the multiplier for retirement savings."
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  retirement: getRetirementMultiplier(state),
});

export default connect(mapStateToProps, { setPlanValue })(Retirement);
