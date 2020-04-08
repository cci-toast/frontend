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
  getSavingsLowerBound,
  getSavingsUpperBound,
} from "../../../redux/selectors";

class EmergencySavings extends React.Component {
  getClasses() {
    let classes = [""];

    if (this.props.currentStep !== 0) {
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
            className="clustered-stacked-bar-chart"
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
                  x: "Your Income",
                  y: this.props.salaryAfterTax,
                  label: "$" + this.props.salaryAfterTax,
                  yOffset: -22,
                  xOffset: -20,
                },
                {
                  x: "Recommended Emergency Savings",
                  y: this.props.upperBound,
                  label:
                    "$" + this.props.lowerBound + "-$" + this.props.upperBound,
                  yOffset: -60,
                  xOffset: 45,
                },
              ]}
            />
            <VerticalBarSeries
              color="#444db6"
              data={[
                { x: "Your Income", y: 0 },
                {
                  x: "Recommended Emergency Savings",
                  y: this.props.upperBound,
                },
              ]}
            />

            <VerticalBarSeries
              color="#8c92d5"
              data={[
                { x: "Your Income", y: this.props.salaryAfterTax },
                {
                  x: "Recommended Emergency Savings",
                  y: this.props.lowerBound,
                },
              ]}
            />
          </XYPlot>
        </Center>

        <p>Shoot for 3-6 months of income set aside for the unexpected.</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lowerBound: getSavingsLowerBound(state),
  upperBound: getSavingsUpperBound(state),
});

export default connect(mapStateToProps)(EmergencySavings);
