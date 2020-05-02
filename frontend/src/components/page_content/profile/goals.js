import React from "react";
import Style from "style-it";

import ToastInput from "../../toast/toast-input";
import ToastSelect from "../../toast/toast-select";
import ToastDuplicateButton from "../../toast/toast-duplicate-button";

import { connect } from "react-redux";

import { getGoals } from "../../../redux/selectors";

import { setGoalListValue, addGoal } from "../../../redux/actions";

import { goalOptions } from "../../../utils/select-utils";

class Goals extends React.Component {
  getClasses() {
    let classes = [""];

    if (this.props.currentStep !== 3) {
      classes.push("hidden");
    }

    return classes.join(" ");
  }

  render() {
    const styles = `
    .wrapper {
        display: flex;
    }
    
    .hidden {
        display: none;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()}>
        <ToastDuplicateButton
          label="Add Goal"
          fields={{ goal: "", amount: "", endDate: "" }}
          value={this.props.goals}
          onChange={this.props.setGoalListValue}
          onDuplicate={this.props.addGoal}
        >
          <ToastSelect
            options={goalOptions}
            name="description"
            label="Goal 1"
            list="goals"
            placeholder="Type in your goal"
            id="goals"
            onChange={this.setGoalListValue}
          />

          <ToastInput
            type="number"
            label="Amount"
            name="amount"
            placeholder="1,000"
            min={0.0}
            step={0.01}
            iconName="dollarsign"
            iconWidth={20}
            iconHeight={20}
          />

          <ToastInput type="date" label="Goal End Date" name="endDate" />
        </ToastDuplicateButton>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  goals: getGoals(state),
});

export default connect(mapStateToProps, {
  setGoalListValue,
  addGoal,
})(Goals);
