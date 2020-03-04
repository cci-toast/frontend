import React, { Component } from "react";

import {
  XYPlot,
  XAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  RadialChart,
  LabelSeries
} from "react-vis";

import Center from "react-center";

import SecondaryButton from "../Components/SecondaryButton";
import QuaternaryButton from "../Components/QuaternaryButton";

var income = 87000;
var incomespouse = 70000;
var age = 40;

class ClientPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1
    };
  }

  next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 4 ? 5 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  //Button functions

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <QuaternaryButton
          handleClick={this.prev}
          type="button"
          label="Previous"
        />
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 5) {
      return (
        <SecondaryButton handleClick={this.next} type="button" label="Next" />
      );
    }
    return null;
  }

  render() {
    const { useCanvas } = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;

    function EmergencySavings(props) {
      var lowerboundemergencysavings = (income / 12) * 3;
      var upperboundemergencysavings = (income / 12) * 6;

      if (props.currentStep !== 1) {
        return null;
      }
      return (
        <div>
          <Center>
            <h6 className="title">Emergency Savings</h6>
          </Center>
          <Center>
            <p>Shoot for 3-6 months of income set aside for the unexpected.</p>
          </Center>

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
                    y: income,
                    label: "$" + income,
                    yOffset: -22,
                    xOffset: -20
                  },
                  {
                    x: "Recommended Emergency Savings",
                    y: upperboundemergencysavings,
                    label:
                      "$" +
                      lowerboundemergencysavings +
                      "-$" +
                      upperboundemergencysavings,
                    yOffset: -60,
                    xOffset: 45
                  }
                ]}
              />
              <BarSeries
                color="#444db6"
                data={[
                  { x: "Your Income", y: 0 },
                  {
                    x: "Recommended Emergency Savings",
                    y: upperboundemergencysavings
                  }
                ]}
              />

              <BarSeries
                color="#8c92d5"
                data={[
                  { x: "Your Income", y: income },
                  {
                    x: "Recommended Emergency Savings",
                    y: lowerboundemergencysavings
                  }
                ]}
              />
            </XYPlot>
          </Center>
        </div>
      );
    }

    function Retirement(props) {
      if (props.currentStep !== 2) {
        return null;
      }
      var retirementmultiplier;

      if (age < 39) {
        retirementmultiplier = 1;
      } else if (age >= 40 && age < 49) {
        retirementmultiplier = 3;
      } else if (age >= 50) {
        retirementmultiplier = 6;
      } else if (age >= 60) {
        retirementmultiplier = 8;
      } else if (age >= 67) {
        retirementmultiplier = 10;
      }

      var householdincome = 70000 + 87000;
      var retirementsavings =
        income * retirementmultiplier + incomespouse * retirementmultiplier;
      return (
        <div>
          <Center>
            <h6 className="title">Household Retirement Savings </h6>
          </Center>
          <Center>
            <p>
              At this point your household should have nearly{" "}
              {retirementmultiplier}x of income.
            </p>
          </Center>

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
                    y: income + incomespouse,
                    label: "$" + householdincome,
                    yOffset: -2,
                    xOffset: -20
                  },
                  {
                    x: "Recommended Retirement Savings",
                    y: retirementsavings,
                    label: "$" + retirementsavings,
                    yOffset: -22,
                    xOffset: 26
                  }
                ]}
              />

              <BarSeries
                color="#8c92d5"
                data={[{ x: "Household Income", y: income + incomespouse }]}
              />

              <BarSeries
                color="#444db6"
                data={[
                  { x: "Recommended Retirement Savings", y: retirementsavings }
                ]}
              />
            </XYPlot>
          </Center>
        </div>
      );
    }

    function Debt(props) {
      if (props.currentStep !== 3) {
        return null;
      }
      var monthlyincome = income / 12;
      var debtyear = income * 0.36;
      var debtmonthly = debtyear / 12;

      const debtrepayment = [
        { angle: debtmonthly, label: "$" + debtmonthly + " monthly" },
        {
          angle: monthlyincome - debtmonthly,
          label: "$" + (monthlyincome - debtmonthly)
        }
      ];

      return (
        <div>
          <Center>
            <h6 className="title">Debt</h6>
          </Center>
          <Center>
            <p>Less than 36% of your income should go toward debt repayment.</p>
          </Center>

          <Center>
            <RadialChart
              colorRange={["#8c92d5", "#444db6"]}
              data={debtrepayment}
              width={300}
              height={300}
              showLabels={true}
            />
          </Center>
        </div>
      );
    }

    function Budget(props) {
      if (props.currentStep !== 4) {
        return null;
      }

      var savings = (income * 0.2) / 12;
      var fixedexpenses = (income * 0.5) / 12;
      var spending = (income * 0.3) / 12;

      const budgetplot = [
        {
          angle: fixedexpenses,
          label: "$" + fixedexpenses + " fixed expenses monthly"
        },
        { angle: spending, label: "$" + spending + " spending monthly" },
        { angle: savings, label: "$" + savings + " savings monthly" }
      ];
      return (
        <div>
          <Center>
            <h6 className="title">Budget </h6>
          </Center>
          <Center>
            <p>
              50% of your income to fixed expenses, 30% for spending, and 20% to
              savings.
            </p>
          </Center>

          <Center>
            <RadialChart
              colorRange={["#c6c9ea", "#444db6", "#8c92d5"]}
              data={budgetplot}
              width={300}
              height={300}
              showLabels={true}
            />
          </Center>
        </div>
      );
    }

    function LifeInsurance(props) {
      if (props.currentStep !== 5) {
        return null;
      }

      var lifeinsurancemultiplier;

      if (age <= 39) {
        lifeinsurancemultiplier = 20;
      } else if (age >= 40 && age <= 49) {
        lifeinsurancemultiplier = 12;
      } else if (age >= 50 && age <= 59) {
        lifeinsurancemultiplier = 6;
      } else {
        lifeinsurancemultiplier = 6;
      }
      var recommendedlifeinsurance = income * lifeinsurancemultiplier;

      return (
        <div>
          <Center>
            <h6 className="title">Life Insurance </h6>
          </Center>
          <Center>
            <p></p>
          </Center>
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

              <BarSeries
                color="#8c92d5"
                data={[{ x: "Your Income", y: income }]}
              />
              <BarSeries
                color="#444db6"
                data={[
                  {
                    x: "Recommended Life Insurance Policy",
                    y: recommendedlifeinsurance
                  }
                ]}
              />

              <LabelSeries
                data={[
                  {
                    x: "Your Income",
                    y: income,
                    label: "$" + income,
                    yOffset: -4,
                    xOffset: -20
                  },
                  {
                    x: "Recommended Life Insurance Policy",
                    y: recommendedlifeinsurance,
                    label: "$" + recommendedlifeinsurance,
                    yOffset: -22,
                    xOffset: 26
                  }
                ]}
              />
            </XYPlot>
          </Center>
        </div>
      );
    }

    return (
      <div>
        <h3>Your Financial Plan</h3>
        <div>
          {/*Renders the form steps and passes required props in*/}
          <form>
            <EmergencySavings currentStep={this.state.currentStep} />
            <Retirement currentStep={this.state.currentStep} />
            <Debt currentStep={this.state.currentStep} />
            <Budget currentStep={this.state.currentStep} />
            <LifeInsurance currentStep={this.state.currentStep} />
            <div className="spacer-primary"></div>
            {this.nextButton()}
            {this.previousButton()}
          </form>
        </div>
      </div>
    );
  }
}

export default ClientPlan;
