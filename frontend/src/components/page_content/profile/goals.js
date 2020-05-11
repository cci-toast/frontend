import React from "react";
import Style from "style-it";

import ToastInput from "../../toast/toast-input";
import ToastSelect from "../../toast/toast-select";
import ToastDuplicateInputButton from "../../toast/toast-duplicate-input-button";

import { connect } from "react-redux";

import { getGoals } from "../../../redux/selectors";

import { setGoalListValue, addGoal, deleteGoal } from "../../../redux/actions";

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
    .hidden {
        display: none;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()}>
        <ToastDuplicateInputButton
          label="Add Goal"
          fields={{ goal: "", amount: "", endDate: "" }}
          value={this.props.goals}
          onChange={this.props.setGoalListValue}
          onDuplicate={this.props.addGoal}
          onDelete={this.props.deleteGoal}
          readOnly={this.props.readOnly}
          maxItems={3}
        >
          <ToastSelect
            options={goalOptions}
            name="description"
            label="Goal"
            list="goals"
            placeholder="Select your goal"
            id="goals"
            readOnly={this.props.readOnly}
          />

          <ToastInput
            type="number"
            label="Amount"
            name="amount"
            placeholder="Type in your goal amount"
            min={0.0}
            step={0.01}
            iconName="dollarsign"
            iconWidth={20}
            iconHeight={20}
            readOnly={this.props.readOnly}
          />

          <ToastInput
            type="date"
            label="End Date"
            name="endDate"
            readOnly={this.props.readOnly}
          />
        </ToastDuplicateInputButton>
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
  deleteGoal,
})(Goals);
