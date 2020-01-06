import React, { Component } from "react";

import {
  XYPlot,
  XAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  RadialChart, LabelSeries
} from 'react-vis';


import Center from 'react-center';

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ClientPlan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1
    }

  }



  next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 4 ? 5 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }


  //Button functions

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button className="btn blue-purple-gradient float-left white-text" type="button" onClick={this.prev}> <FontAwesomeIcon icon={faArrowLeft} /> Previous </button>

      )
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 5) {
      return (
        <button className="btn blue-purple-gradient float-right white-text" type="button" onClick={this.next}>Next <FontAwesomeIcon icon={faArrowRight} />  </button>
      )
    }
    return null;
  }

  render() {
    const { useCanvas } = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    function Step1(props) {

      var incomeval = 87000;

      var lowerboundemergencysavings = (incomeval / 12) * 3;
      var upperboundemergencysavings = (incomeval / 12) * 6;


      if (props.currentStep !== 1) {
        return null
      }
      return (
        <div>
          <Center>
            <h6 className="black-text" style={{ fontWeight: "bold" }}>Emergency Savings </h6>
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
              height={300}>

              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />

              <LabelSeries
                data={[
                  { x: 'Your Income', y: incomeval, label: "$" + incomeval, yOffset: -22, xOffset: -20 },
                  { x: 'Recommended Emergency Savings', y: upperboundemergencysavings, label: "$" + lowerboundemergencysavings + "-$" + upperboundemergencysavings, yOffset: -60, xOffset: 45 }
                ]} />
              <BarSeries
                color="#444db6"
                data={[
                  { x: 'Your Income', y: 0 },
                  { x: 'Recommended Emergency Savings', y: upperboundemergencysavings }
                ]}/>
                
              <BarSeries
                color="#8c92d5"
                data={[
                  { x: 'Your Income', y: incomeval },
                  { x: 'Recommended Emergency Savings', y: lowerboundemergencysavings }

                ]}/>
       
            </XYPlot>
          </Center>
        </div>
      );
    }
    function Step2(props) {
      if (props.currentStep !== 2) {
        return null
      }
      var age = 40;
      var incomeval = 87000;
      var retirementmultiplier;

      if (age < 39) {
        retirementmultiplier = 1;
      }
      else if (age >= 40 && age < 49) {
        retirementmultiplier = 3;
      }
      else if (age >= 50) {
        retirementmultiplier = 6;
      }
      else if (age >= 60) {
        retirementmultiplier = 8;
      }
      else if (age >= 67) {
        retirementmultiplier = 10;
      }

      var retirementsavings = incomeval * retirementmultiplier;
      return (
        <div>
          <Center>
            <h6 className="black-text" style={{ fontWeight: "bold" }}>Retirement </h6>
          </Center>
          <Center>
            <p>At this point you should have nearly {retirementmultiplier}x of your income.</p>
          </Center>
        
          <Center>
            <XYPlot
              className="clustered-stacked-bar-chart"
              xType="ordinal"
              stackBy="y"
              margin={{ top: 30 }}
              width={600}
              height={300}>

              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />

              <LabelSeries
                data={[
                  { x: 'Your Income', y: incomeval, label: "$" + incomeval, yOffset: -2, xOffset: -20 },
                  { x: 'Recommended Retirement Savings', y: retirementsavings, label: "$" + retirementsavings , yOffset: -22, xOffset:26}
                
                ]} />
                
             
              <BarSeries
                color="#8c92d5"
                data={[
                  { x: 'Your Income', y: incomeval }
                ]}/>



              <BarSeries
                color="#444db6"
                data={[
                  { x: 'Recommended Retirement Savings', y: retirementsavings }
                ]}/>

            </XYPlot>
          </Center>
        </div>
      );
    }
    function Step3(props) {
      if (props.currentStep !== 3) {
        return null
      }
      var incomeval = 87000;
      var monthlyincome=incomeval/12;
      var debtyear = (incomeval * 0.36);
      var debtmonthly = debtyear / 12;
    
      const debtrepayment = [{ angle: debtmonthly,label: "$"+debtmonthly+" monthly" },{ angle: monthlyincome-debtmonthly}];

      //const debtrepayment = [{ label: "$"+debtmonthly, angle: debtmonthly },{ label: "$"+monthlyincome, angle: monthlyincome-debtmonthly }];

      return (
        <div>
          <Center>
          <h6 className="black-text" style={{ fontWeight: "bold" }}>Debt </h6>
          </Center>
          <Center>
          <p>Less than 36% of your income should go toward debt repayment.</p>
          </Center>
        

          <Center>
          <RadialChart
            colorRange={["#8c92d5","#444db6"]}
            data={debtrepayment}
            width={300}
            height={300} showLabels={true}/>
          </Center>

        </div>


      );
    }


    function Step4(props) {
      if (props.currentStep !== 4) {
        return null
      }
      var incomeval = 87000;

      var savings = (incomeval * 0.20) / 12;
      var fixedexpenses = (incomeval * 0.50) / 12;
      var spending = (incomeval * 0.30) / 12;

      const budgetplot = [{ angle: fixedexpenses, label:"$"+fixedexpenses+" fixed expenses monthly"}, { angle: spending, label:"$"+spending+" spending monthly" },{ angle: savings, label: "$"+savings+ " savings monthly" }];
      return (

        <div>
          <Center>
            <h6 className="black-text" style={{ fontWeight: "bold" }}>Budget </h6>
          </Center>
          <Center>
            <p>50% of your income to fixed expenses, 30% for spending, and 20% to savings.   </p>
          </Center>

          <Center>
            <RadialChart
              colorRange={["#c6c9ea","#444db6","#8c92d5" ]}
              data={budgetplot}
              width={300}
              height={300} showLabels={true} />
          </Center>
      
        </div>

      );
    }

    function Step5(props) {
      if (props.currentStep !== 5) {
        return null
      }
      var incomeval = 87000;
      var recommendedprotection = incomeval * 10;
      return (
        <div>
          <Center>
          <h6 className="black-text" style={{ fontWeight: "bold" }}>Protection </h6>
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
            height={300}>

            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />

            <BarSeries
              color="#8c92d5"
              data={[
                { x: 'Your Income', y: incomeval },
              ]}/>
            <BarSeries
              color="#444db6"
              data={[
                { x: 'Recommended Life Insurance Policy', y: recommendedprotection }
              ]}/>
          
          <LabelSeries
                data={[
                  { x: 'Your Income', y: incomeval, label: "$" + incomeval, yOffset: -4, xOffset: -20 },
                  { x: 'Recommended Life Insurance Policy', y: recommendedprotection, label: "$" + recommendedprotection , yOffset: -22, xOffset:26}
                
                ]} />
          </XYPlot>
          </Center>
        </div>
      );
    }



    return (
      <main className="section">
        <h4 className="black-text" style={{ fontWeight: "bold" }}>Your Financial Plan </h4>
        <React.Fragment>
          {/*Renders the form steps and passes required props in*/}
          <form onSubmit={this.handleSubmit}>
            <Step1 currentStep={this.state.currentStep} handleChange={this.handleChange} />
            <Step2 currentStep={this.state.currentStep} handleChange={this.handleChange} />
            <Step3 currentStep={this.state.currentStep} handleChange={this.handleChange} />
            <Step4 currentStep={this.state.currentStep} handleChange={this.handleChange} />
            <Step5 currentStep={this.state.currentStep} handleChange={this.handleChange} />
            {this.previousButton()}
            {this.nextButton()}
          </form>
        </React.Fragment>
      </main>
    );
  }

}


export default ClientPlan;