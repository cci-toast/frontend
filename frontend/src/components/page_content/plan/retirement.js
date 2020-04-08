import React from "react";
import Center from "react-center";
import Style from "style-it";

import { connect } from "react-redux";

import {
  VerticalBarSeries,
  HorizontalGridLines,
  LabelSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
} from "react-vis";

import {
  getHouseholdIncome,
  getRetirement,
  getRetirementMultiplier,
} from "../../../redux/selectors";

class Retirement extends React.Component {
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
        <Center>
          <XYPlot
            className="chartMargin"
            xType="ordinal"
            stackBy="y"
            margin={{ top: 30 }}
            width={600}
            height={300}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />

            <LabelSeries
              data={[
                {
                  x: "Household Income",
                  y: this.props.householdIncome,
                  label: "$" + this.props.householdIncome,
                  yOffset: -2,
                  xOffset: -20,
                },
                {
                  x: "Recommended Retirement Savings",
                  y: this.props.retirement,
                  label: "$" + this.props.retirement,
                  yOffset: -22,
                  xOffset: 26,
                },
              ]}
            />

            <VerticalBarSeries
              color="#8c92d5"
              data={[
                {
                  x: "Household Income",
                  y: this.props.householdIncome,
                },
              ]}
            />

            <VerticalBarSeries
              color="#444db6"
              data={[
                {
                  x: "Recommended Retirement Savings",
                  y: this.props.retirement,
                },
              ]}
            />
          </XYPlot>
        </Center>
        <p>
          At this point your household should have nearly{" "}
          {this.props.multiplier}x of income.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  householdIncome: getHouseholdIncome(state),
  retirement: getRetirement(state),
  multiplier: getRetirementMultiplier(state),
});

export default connect(mapStateToProps)(Retirement);
