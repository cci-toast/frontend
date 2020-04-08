import React from "react";
import Center from "react-center";
import Style from "style-it";

import { connect } from "react-redux";

import { RadialChart } from "react-vis";

import {
  getFixedExpenses,
  getSavings,
  getSpending,
} from "../../../redux/selectors";

class Budgeting extends React.Component {
  constructor(props) {
    super(props);

    this.budgeting = [
      {
        angle: this.props.fixedExpenses,
        label: "$" + this.props.fixedExpenses + " fixed expenses monthly",
      },
      {
        angle: this.props.spending,
        label: "$" + this.props.spending + " spending monthly",
      },
      {
        angle: this.props.savings,
        label: "$" + this.props.savings + " savings monthly",
      },
    ];
  }

  getClasses() {
    let classes = [""];

    if (this.props.currentStep !== 4) {
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
        <Center>
          <RadialChart
            colorRange={["#c6c9ea", "#444db6", "#8c92d5"]}
            data={this.budgeting}
            width={300}
            height={300}
            showLabels={true}
          />
        </Center>
        <p>
          50% of your income to fixed expenses, 30% for spending, and 20% to
          savings.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  savings: getSavings(state),
  fixedExpenses: getFixedExpenses(state),
  spending: getSpending(state),
});

export default connect(mapStateToProps)(Budgeting);
