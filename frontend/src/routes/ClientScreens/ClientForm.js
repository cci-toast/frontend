import React, { Component } from "react";
import Select from "react-select";

import TertiaryButton from "../Components/TertiaryButton";
import { Row, Col } from "reactstrap";
import Center from "react-center";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";
import QuaternaryButton from "../Components/QuaternaryButton";
import "../../index.css";

class ClientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,

    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 5 ? 6 : currentStep + 1;
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
        <QuaternaryButton handleClick={this.prev} type="button" label="Previous" />
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 6) {
      return (
        <SecondaryButton handleClick={this.next} type="button" label="Next" />

      );
    }
    return null;
  }

  saveButton() {
    let currentStep = this.state.currentStep;
    if (currentStep == 6) {
      return (
        <PrimaryButton type="button" label="Save" />

      );
    }
    return null;
  }



  render() {
    return (
      <div>
        <h4 className="title" >Your Profile </h4>
        <p>
          Please fill out the information to generate your financial plan and
          action items.
        </p>
          {/* <p>Step {this.state.currentStep} </p>*/}
          {/*Renders the form steps and passes required props in*/}
          <form onSubmit={this.handleSubmit}>
            <ClientInformation
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              fname={this.state.fname}
              lname={this.state.lname}
              bday={this.state.bday}
              income={this.state.income} />
            <Finances
              currentStep={this.state.currentStep}
              handleChange={this.handleChange} />
              <Bills
               currentStep={this.state.currentStep}
               handleChange={this.handleChange} />
            <Expenses
               currentStep={this.state.currentStep}
               handleChange={this.handleChange} />
            <FamilyInformation
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              spousename={this.state.spousename}
              spousebday={this.state.spousebday}
              numchildren={this.state.numchildren}
              childname={this.state.childname}
              childbday={this.state.childbday} />
            <Goals
              currentStep={this.state.currentStep}
              handleChange={this.handleChange} />
            
            {this.nextButton()}
            {this.saveButton()}
            {this.previousButton()}
           
          </form>

      </div>
    );
  }
}

function ClientInformation(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group required">

      <Row>
        <Col xs="6">
          <label className="control-label">First Name</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name="fname"
              placeholder="Type in your first name"
              value={props.fname}
              onChange={props.handleChange}
              required
            />
          </div>
          <div className="required">
            <label className="control-label">Date of Birth</label>
            <div className="input-group">
              <input
                type="date"
                className="form-control"
                name="bday"
                value={props.bday}
                onChange={props.handleChange}
                required
              />
            </div>
          </div>

        </Col>
        <Col xs="6">
          <div className="required">
            <label className="control-label">Last Name</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="lname"
                placeholder="Type in your last name"
                value={props.lname}
                onChange={props.handleChange}
                required
              />
            </div>
          </div>
          <div className="required">
            <label className="control-label">Occupation</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="occupation"
                placeholder="Type in your occupation"
                value={props.occupation}
                onChange={props.handleChange}
                required
              />
            </div>
          </div>
        </Col>
      </Row>

        <Row>
        <Col xs="6">
          <div className="required">
            <label className="control-label">State</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="state"
                placeholder="Type in your state"
                value={props.state}
                onChange={props.handleChange}
                required
              />
            </div>
          </div>
        </Col>
        <Col xs="6">
          <div className="required">
            <label className="control-label">Zip Code</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="zipcode"
                placeholder="Type in your zip-code"
                value={props.zipcode}
                onChange={props.handleChange}
                required
              />
            </div>
          </div>
        </Col>
      </Row>
      <div className="spacerPrimary" ></div>
    </div>

  

  );
}

function Finances(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div>
      <Row>
        <Col xs="6">
          <h5>Income</h5>
          <div className="required">
            <label className="control-label">Annual Salary Before Taxes</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon"> $</span>
              </div>
              <input
                type="number"
                className="form-control"
                name="income"
                placeholder="Type in your annual household income"
                min="0"
                value={props.income}
                onChange={props.handleChange}
                required
              />
            </div>
          </div>
        </Col>
      </Row>
      <Center>
        <TertiaryButton label="+ Additional Income" />
      </Center>

      <div className="spacerSecondary"></div>
    </div>
  );
}

function Bills(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return(
  <div>
 <h5>Bills</h5>
    <Center>
      <TertiaryButton label="+ Housing" />
    </Center>
    <hr />
    <Center>
      <TertiaryButton label="+ Bill" />
    </Center>
    <hr />
    <Center>
      <TertiaryButton label="+ Utility" />
    </Center>
    <hr />
    <Center>
      <TertiaryButton label="+ Insurance" />
    </Center>
    <hr />
    <Center>
      <TertiaryButton label="+ Loan/Debt" />
    </Center>

  </div>
  );
}

function Expenses(props) {
  if (props.currentStep !== 4) {
    return null;
  }
  return(
  <div>
 <h5>Expenses</h5>
   
      <Row>
        <Col xs="6">
          <label className="black-text">Shopping Description</label>
          <div className="input-group">
            <input
              type="fname"
              className="form-control"
              name="childfname"
              placeholder="Type in your shopping description."
              value={props.childname}
              onChange={props.handleChange} />
          </div>
          </Col>

          <Col xs="6">
          <label className="black-text">Shopping Amount Spent</label>
          <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon"> $</span>
              </div>
              <input
                type="number"
                className="form-control"
                name="income"
                placeholder="Type in the amount spent on shopping item(s)."
                min="0"
                value={props.income}
                onChange={props.handleChange}
                required
              />
            </div>
        </Col>
        </Row>
        <br/>
    <Center>
      <TertiaryButton label="+ Shopping" />
    </Center>
    <hr />
  
    <Center>
      <TertiaryButton label="+ Leisure" />
    </Center>
    <hr />
  
    <Center>
      <TertiaryButton label="+ Transportation" />
    </Center>
    <hr />
  
    <Center>
      <TertiaryButton label="+ Subscriptions" />
    </Center>

  </div>
  );
}


function FamilyInformation(props) {
  if (props.currentStep !== 5) {
    return null;
  }
  return (
    <div>
      <Row>
        <Col xs="6">
          <label className="control-label">Spouse's First Name</label>
          <div className="input-group">
            <input
              type="fname"
              className="form-control"
              name="spousefname"
              placeholder="Type in your spouse's first name"
              value={props.spousename}
              onChange={props.handleChange}
              required />
          </div>

          <label className="control-label">Spouse's Date of Birth</label>
          <div className="input-group">
            <input
              type="date"
              className="form-control"
              name="spousebday"
              value={props.spousebday}
              onChange={props.handleChange}
              required />
          </div>
        </Col>
        <Col xs="6">
          <label className="control-label">Spouse's Last Name</label>
          <div className="input-group">
            <input
              type="lname"
              className="form-control"
              name="spouselname"
              placeholder="Type in your spouse's last name"
              value={props.spousename}
              onChange={props.handleChange}
              required />
          </div>
        </Col>
      </Row>
      <Center>
        <TertiaryButton label="+ Partner" />
      </Center>
      <hr />

      <Row>
        <Col xs="6">
          <label className="black-text">Child's First Name</label>
          <div className="input-group">
            <input
              type="fname"
              className="form-control"
              name="childfname"
              placeholder="Type in your child's first name"
              value={props.childname}
              onChange={props.handleChange} />
          </div>

          <label className="black-text">Child's Date of Birth</label>
          <div className="input-group">
            <input
              type="date"
              className="form-control"
              name="childbday"
              value={props.childbday}
              onChange={props.handleChange} />
          </div>
        </Col>
        <Col xs="6">

          <label className="black-text">Child's Last Name</label>
          <div className="input-group">
            <input
              type="lname"
              className="form-control"
              name="childlname"
              placeholder="Type in your child's last name"
              value={props.childname}
              onChange={props.handleChange} />
          </div>
        </Col>
      </Row>

      <Center>
        <TertiaryButton label="+ Child" />
      </Center>
    </div>

  );
}



function Goals(props) {
  if (props.currentStep !== 6) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <div className="required">
          <label className="control-label">
            Short Term Goal (Examples: taking a vacation, buying a car)
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name="shorttermgoal"
              placeholder="Type in a short term goal"
              value={props.lname}
              onChange={props.handleChange}
              required />
          </div>
        </div>
        <Center>
          <TertiaryButton label="+ Short Term Goal" />
        </Center>
        <div className="required">
          <label className="control-label">
            Long Term Goal (Examples: buying a house, preparing for retirement)
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name="shorttermgoal"
              placeholder="Type in a long term goal"
              value={props.lname}
              onChange={props.handleChange}
              required />
          </div>
        </div>

        {/* TODO: Add inputs on button click */}
        <Center>
          <TertiaryButton label="+ Long Term Goal" />
        </Center>
        <div className="spacerPrimary" ></div>
      </div>
    </React.Fragment>
  );
}



export default ClientForm;
