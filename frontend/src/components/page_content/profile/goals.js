import React from "react";
import Center from "react-center";
import Style from "style-it";

import ToastInput from "../../toast/toast-input";
import ToastButton from "../../toast/toast-button";
import ToastSelect from "../../toast/toast-select";

import { connect } from "react-redux";

import { getGoals } from "../../../redux/selectors";

import { setGoalListValue } from "../../../redux/actions";

import { goalOptions } from "../../../utils/select-utils";

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.setGoalListValue = this.setGoalListValue.bind(this);
  }

  setGoalListValue(event) {
    const { name, value } = event.target;
    this.props.setGoalListValue(0, name, value);
  }

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
        <ToastSelect
          options={goalOptions}
          name="description"
          label="Goal 1"
          list="goals"
          placeholder="Select your goal"
          defaultValue={this.props.goals[0].description}
          id="goals"
          onChange={this.setGoalListValue}
        />

        <div className="row">
          <div className="column">
            <ToastInput
              type="number"
              label="Amount"
              name="amount"
              placeholder="1,000"
              min={0.0}
              step={0.01}
              iconName="dollarsign"
              defaultValue={this.props.goals[0].amount}
              onChange={this.setGoalListValue}
            />
          </div>
          <div className="column">
            <ToastInput
              type="date"
              label="Goal End Date"
              defaultValue={this.props.goals[0].endDate}
              name="endDate"
              onChange={this.setGoalListValue}
            />
          </div>
        </div>

        {/* TODO: Add inputs on button click */}
        <Center>
          <ToastButton tertiary label="Add Goal" />
        </Center>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  goals: getGoals(state),
});

export default connect(mapStateToProps, {
  setGoalListValue,
})(Goals);
