import React, { Component } from 'react';
import Center from 'react-center';
import {
  HorizontalGridLines,
  LabelSeries,
  RadialChart,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  VerticalGridLines,
  XAxis,
  XYPlot,
} from 'react-vis';
import Style from 'style-it';

import SaveCancelComponent from './SaveCancelComponent';

var income = 87000;
var incomespouse = 70000;
var age = 40;

class ClientPlanContent extends Component {
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

  hidePrevButton = () => {
    return this.state.currentStep === 1;
  };

  hideNextButton = () => {
    return this.state.currentStep === 5;
  };

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
        <React.Fragment>
          <Center>
            <XYPlot
              className='clustered-stacked-bar-chart'
              xType='ordinal'
              stackBy='y'
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
                    x: 'Your Income',
                    y: income,
                    label: '$' + income,
                    yOffset: -22,
                    xOffset: -20
                  },
                  {
                    x: 'Recommended Emergency Savings',
                    y: upperboundemergencysavings,
                    label:
                      '$' +
                      lowerboundemergencysavings +
                      '-$' +
                      upperboundemergencysavings,
                    yOffset: -60,
                    xOffset: 45
                  }
                ]}
              />
              <BarSeries
                color='#444db6'
                data={[
                  { x: 'Your Income', y: 0 },
                  {
                    x: 'Recommended Emergency Savings',
                    y: upperboundemergencysavings
                  }
                ]}
              />

              <BarSeries
                color='#8c92d5'
                data={[
                  { x: 'Your Income', y: income },
                  {
                    x: 'Recommended Emergency Savings',
                    y: lowerboundemergencysavings
                  }
                ]}
              />
            </XYPlot>
          </Center>

          <p>Shoot for 3-6 months of income set aside for the unexpected.</p>
        </React.Fragment>
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
        <React.Fragment>
          <Center>
            <XYPlot
              className='chartMargin'
              xType='ordinal'
              stackBy='y'
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
                    x: 'Household Income',
                    y: income + incomespouse,
                    label: '$' + householdincome,
                    yOffset: -2,
                    xOffset: -20
                  },
                  {
                    x: 'Recommended Retirement Savings',
                    y: retirementsavings,
                    label: '$' + retirementsavings,
                    yOffset: -22,
                    xOffset: 26
                  }
                ]}
              />

              <BarSeries
                color='#8c92d5'
                data={[{ x: 'Household Income', y: income + incomespouse }]}
              />

              <BarSeries
                color='#444db6'
                data={[
                  { x: 'Recommended Retirement Savings', y: retirementsavings }
                ]}
              />
            </XYPlot>
          </Center>
          <p>
            At this point your household should have nearly{' '}
            {retirementmultiplier}x of income.
          </p>
        </React.Fragment>
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
        { angle: debtmonthly, label: '$' + debtmonthly + ' monthly' },
        {
          angle: monthlyincome - debtmonthly,
          label: '$' + (monthlyincome - debtmonthly)
        }
      ];

      return (
        <React.Fragment>
          <Center>
            <RadialChart
              colorRange={['#8c92d5', '#444db6']}
              data={debtrepayment}
              width={300}
              height={300}
              showLabels={true}
            />
          </Center>
          <p>Less than 36% of your income should go toward debt repayment.</p>
        </React.Fragment>
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
          label: '$' + fixedexpenses + ' fixed expenses monthly'
        },
        { angle: spending, label: '$' + spending + ' spending monthly' },
        { angle: savings, label: '$' + savings + ' savings monthly' }
      ];
      return (
        <React.Fragment>
          <Center>
            <RadialChart
              colorRange={['#c6c9ea', '#444db6', '#8c92d5']}
              data={budgetplot}
              width={300}
              height={300}
              showLabels={true}
            />
          </Center>
          <p>
            50% of your income to fixed expenses, 30% for spending, and 20% to
            savings.
          </p>
        </React.Fragment>
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
        <React.Fragment>
          <Center>
            <XYPlot
              xType='ordinal'
              stackBy='y'
              margin={{ top: 30 }}
              width={600}
              height={300}
            >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />

              <BarSeries
                color='#8c92d5'
                data={[{ x: 'Your Income', y: income }]}
              />
              <BarSeries
                color='#444db6'
                data={[
                  {
                    x: 'Recommended Life Insurance Policy',
                    y: recommendedlifeinsurance
                  }
                ]}
              />

              <LabelSeries
                data={[
                  {
                    x: 'Your Income',
                    y: income,
                    label: '$' + income,
                    yOffset: -4,
                    xOffset: -20
                  },
                  {
                    x: 'Recommended Life Insurance Policy',
                    y: recommendedlifeinsurance,
                    label: '$' + recommendedlifeinsurance,
                    yOffset: -22,
                    xOffset: 26
                  }
                ]}
              />
            </XYPlot>
          </Center>
        </React.Fragment>
      );
    }

    const styles = `
    .save-cancel {
      display: flex;
      justify-content: flex-end;
    }

    .container {
      height: calc(100vh - 10rem);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className='container'>
        <form>
          <EmergencySavings currentStep={this.state.currentStep} />
          <Retirement currentStep={this.state.currentStep} />
          <Debt currentStep={this.state.currentStep} />
          <Budget currentStep={this.state.currentStep} />
          <LifeInsurance currentStep={this.state.currentStep} />
          <div className='spacer-primary'></div>
        </form>
        <div className='save-cancel'>
          <SaveCancelComponent
            saveClicked={this.next}
            cancelClicked={this.prev}
            saveLabel='next'
            cancelLabel='previous'
            hideSave={this.hideNextButton()}
            hideCancel={this.hidePrevButton()}
          ></SaveCancelComponent>
        </div>
      </div>
    );
  }
}

export default ClientPlanContent;
