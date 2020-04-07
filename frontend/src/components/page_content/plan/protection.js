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

import { getProtection } from "../../../redux/selectors";

class Protection extends React.Component {
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
        <Center>
          <XYPlot
            xType="ordinal"
            stackBy="y"
            margin={{ top: 30 }}
            width={600}
            height={300}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />

            <VerticalBarSeries
              color="#8c92d5"
              data={[{ x: "Your Income", y: this.props.salaryAfterTax }]}
            />
            <VerticalBarSeries
              color="#444db6"
              data={[
                {
                  x: "Recommended Life Insurance Policy",
                  y: this.props.protection,
                },
              ]}
            />

            <LabelSeries
              data={[
                {
                  x: "Your Income",
                  y: this.props.salaryAfterTax,
                  label: "$" + this.props.salaryAfterTax,
                  yOffset: -4,
                  xOffset: -20,
                },
                {
                  x: "Recommended Life Insurance Policy",
                  y: this.props.protection,
                  label: "$" + this.props.protection,
                  yOffset: -22,
                  xOffset: 26,
                },
              ]}
            />
          </XYPlot>
        </Center>{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  protection: getProtection(state),
});

export default connect(mapStateToProps)(Protection);
