import React from "react";
import Center from "react-center";
import Style from "style-it";

import { connect } from "react-redux";

import { RadialChart } from "react-vis";

import { getDebtMonthly, getSalaryAfterDebt } from "../../../redux/selectors";

import ToastToggle from "../../toast/toast-toggle";

class Debt extends React.Component {
  constructor(props) {
    super(props);
    this.debtRepayment = [
      {
        angle: this.props.debtMonthly,
        label: "$" + this.props.debtMonthly + " monthly",
      },
      {
        angle: this.props.salaryAfterDebt,
        label: "$" + this.props.salaryAfterDebt,
      },
    ];
  }

  getClasses() {
    let classes = [""];

    if (this.props.currentStep !== 2) {
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
        <ToastToggle active="Target" inactive="Current" />
        <Center>
          <RadialChart
            colorRange={["#8c92d5", "#444db6"]}
            data={this.debtRepayment}
            width={300}
            height={300}
            showLabels={true}
          />
        </Center>
        <p>Less than 36% of your income should go toward debt repayment.</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  debtMonthly: getDebtMonthly(state),
  salaryAfterDebt: getSalaryAfterDebt(state),
});

export default connect(mapStateToProps)(Debt);
