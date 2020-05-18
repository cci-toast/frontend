import React from "react";
import Style from "style-it";

import { connect } from "react-redux";

import {
  getDebtMonthly,
  getSalaryAfterDebt,
  isOnTrackDebt,
  getLoanDebt,
  getDebtMultiplier,
} from "../../../redux/selectors";

import { numWithCommas, calcMonthlyValue } from "../../../utils/plan-utils";

import ToastToggle from "../../toast/toast-toggle";
import ToastPieChart from "../../toast/toast-pie-chart";

class Debt extends React.Component {
  constructor(props) {
    super(props);

    this.data = [
      {
        name: "Remaining Monthly Income",
        value: this.props.salaryAfterDebt,
        fill: "var(--toast-neutral-3)",
      },
      {
        name: "Target Monthly Payment",
        value: this.props.debtMonthly,
        fill: "url(#gradient)",
      },
    ];

    this.actual = [
      {
        name: "Remaining Monthly Income",
        value:
          calcMonthlyValue(this.props.salaryAfterTax) - this.props.loanDebt ||
          0,
        fill: "var(--toast-neutral-3)",
      },
      {
        name: "Current Monthly Savings",
        value: this.props.loanDebt || 0,
        fill: "url(#gradient)",
      },
    ];

    this.setActiveToggle = this.setActiveToggle.bind(this);
    this.getOnTrack = this.getOnTrack.bind(this);

    this.currentDebt = React.createRef();
    this.targetDebt = React.createRef();
  }

  getHeader() {
    return `$${numWithCommas(this.props.debtMonthly)}`;
  }

  getOnTrack() {
    let isOntrack = this.props.loanDebt <= this.props.debtMonthly;
    if (isOntrack === undefined) {
      return "";
    } else if (isOntrack) {
      return "You are currently on track.";
    } else {
      return `You are currently not on track since you plan to repay debt that is more than ${
        this.props.debtMultiplier * 100
      }% your monthly income.`;
    }
  }

  getToggleClasses() {
    let classes = ["toggle"];
    if (this.props.loanDebt === undefined || 0) {
      classes.push("hidden");
    }
    return classes.join(" ");
  }

  getCaption() {
    return `Given that your monthly income is $${numWithCommas(
      calcMonthlyValue(this.props.salaryAfterTax)
    )}, we recommend you put at most $${numWithCommas(
      this.props.debtMonthly
    )} towards repaying debt for this month. ${this.getOnTrack()}
    `;
  }

  getClasses() {
    let classes = ["chart"];

    if (this.props.currentStep !== 2) {
      classes.push("hidden");
    }

    return classes.join(" ");
  }
  setActiveToggle(active) {
    if (active === "Current" && this.current !== null && this.target !== null) {
      this.targetDebt.current.classList.add("hidden");
      this.currentDebt.current.classList.remove("hidden");
    } else if (
      active === "Target" &&
      this.targetDebt.current !== null &&
      this.currentDebt !== null
    ) {
      this.targetDebt.current.classList.remove("hidden");
      this.currentDebt.current.classList.add("hidden");
    }
  }

  render() {
    const styles = `
    .wrapper {
        display: flex;
    }
    
    .chart {
     margin-top: -1.25rem;
    }
    
    .hidden {
        display: none;
    }

    .toggle {
        position: relative;
        z-index: 1;
        top: 3.75rem;
        left: 2.5rem;
    }
    `;

    return Style.it(
      `${styles}`,

      <div className={this.getClasses()}>
        <div className={this.getToggleClasses()}>
          <ToastToggle
            active="Target"
            inactive="Current"
            activeLabel={this.setActiveToggle}
          />
        </div>
        <div ref={this.targetDebt} className="">
          <ToastPieChart
            label={this.data}
            salaryAfterTax={this.props.salaryAfterTax}
            header={this.getHeader()}
            data={this.data}
            subheader={calcMonthlyValue(this.props.salaryAfterTax)}
            caption={this.getCaption()}
          />
        </div>
        <div ref={this.currentDebt} className="hidden">
          <ToastPieChart
            label={this.actual}
            salaryAfterTax={this.props.salaryAfterTax}
            data={this.actual}
            caption={this.getCaption()}
            header="&nbsp;"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  debtMonthly: getDebtMonthly(state),
  salaryAfterDebt: getSalaryAfterDebt(state),
  isOnTrackDebt: isOnTrackDebt(state),
  loanDebt: getLoanDebt(state),
  debtMultiplier: getDebtMultiplier(state),
});

export default connect(mapStateToProps)(Debt);
