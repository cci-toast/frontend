import React, { Component } from "react";
//import Select from "react-select";

import { Row, Col } from "reactstrap";
import Center from "react-center";
import InputComponent from "../Components/InputComponent";

import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import ToastButton from "../Components/ToastButton";

class ClientProfileContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1
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

  // Button functions

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <ToastButton
          quaternary
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
    if (currentStep < 6) {
      return (
        <ToastButton
          secondary
          handleClick={this.next}
          type="button"
          label="Next"
        />
      );
    }
    return null;
  }

  saveButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 6) {
      return <ToastButton primary type="button" label="Save" />;
    }
    return null;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ClientInformation
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          fname={this.state.fname}
          lname={this.state.lname}
          bday={this.state.bday}
          city={this.state.city}
          state={this.state.state}
          zipcode={this.state.zipcode}
        />
        <Finances
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          income={this.state.income}
        />
        <Bills
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
        />
        <Expenses
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          shoppingdescription={this.state.shoppingdescription}
          shoppingamount={this.state.shoppingamount}
        />
        <FamilyInformation
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          spousefname={this.state.spousefname}
          spouselname={this.state.spouselname}
          spousebday={this.state.spousebday}
          numchildren={this.state.numchildren}
          childfname={this.state.childfname}
          childlname={this.state.childlname}
          childbday={this.state.childbday}
        />
        <Goals
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
        />

        {this.nextButton()}
        {this.saveButton()}
        {this.previousButton()}
      </form>
    );
  }
}

function ClientInformation(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div>
      <Row>
        <Col xs="6">
          <InputComponent
            type="text"
            label="First Name"
            placeholder="Type in your first name"
            value={props.fname}
            name="fname"
            onChange={props.handleChange}
            required
          />
          <InputComponent
            type="date"
            label="Date of Birth"
            value={props.bday}
            name="bday"
            onChange={props.handleChange}
            required
          />

          <InputComponent
            type="text"
            label="State"
            placeholder="Type in your state"
            value={props.state}
            name="state"
            onChange={props.handleChange}
          />
        </Col>

        <Col xs="6">
          <InputComponent
            type="text"
            label="Last Name"
            placeholder="Type in your last name"
            value={props.lname}
            name="lname"
            onChange={props.handleChange}
            required
          />
          <InputComponent
            type="text"
            label="City"
            placeholder="Type in your city"
            value={props.city}
            name="city"
            onChange={props.handleChange}
          />
          <InputComponent
            type="text"
            label="Zip Code"
            placeholder="Type in your zip-code"
            value={props.zipcode}
            name="zipcode"
            pattern="[0-9]*"
            onChange={props.handleChange}
          />
        </Col>
      </Row>
      <div className="spacer-tertiary"></div>
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
          <InputComponent
            type="number"
            min="0"
            label="Annual Salary Before Taxes"
            placeholder="Type in your annual salary before taxes"
            value={props.income}
            name="income"
            icon={faDollarSign}
            onChange={props.handleChange}
            required
          />
        </Col>
      </Row>
      <Center>
        <ToastButton tertiary label="+ Additional Income" />
      </Center>

      <div className="spacer-quaternary"></div>
    </div>
  );
}

function Bills(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div>
      <h5>Bills</h5>
      <Center>
        <ToastButton tertiary label="+ Housing" />
      </Center>
      <hr />
      <Center>
        <ToastButton tertiary label="+ Bill" />
      </Center>
      <hr />
      <Center>
        <ToastButton tertiary label="+ Utility" />
      </Center>
      <hr />
      <Center>
        <ToastButton tertiary Button label="+ Insurance" />
      </Center>
      <hr />
      <Center>
        <ToastButton tertiary label="+ Loan/Debt" />
      </Center>
    </div>
  );
}

function Expenses(props) {
  if (props.currentStep !== 4) {
    return null;
  }
  return (
    <div>
      <h5>Expenses</h5>

      <Row>
        <Col xs="6">
          <InputComponent
            type="text"
            label="Shopping Description"
            name="shoppingdescription"
            placeholder="Type in your shopping description."
            value={props.shoppingdescription}
            onChange={props.handleChange}
          />
        </Col>

        <Col xs="6">
          <InputComponent
            type="number"
            label="Shopping Amount"
            name="shoppingamount"
            placeholder="Type in the amount spent on shopping items."
            min="0"
            icon={faDollarSign}
            value={props.shoppingamount}
            onChange={props.handleChange}
          />
        </Col>
      </Row>
      <br />
      <Center>
        <ToastButton tertiary label="+ Shopping" />
      </Center>
      <hr />

      <Center>
        <ToastButton tertiary label="+ Leisure" />
      </Center>
      <hr />

      <Center>
        <ToastButton tertiary label="+ Transportation" />
      </Center>
      <hr />

      <Center>
        <ToastButton tertiary label="+ Subscriptions" />
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
          <InputComponent
            type="text"
            label="Spouse's First Name"
            name="spousefname"
            placeholder="Type in your spouse's first name"
            value={props.spousefname}
            onChange={props.handleChange}
          />
          <InputComponent
            type="date"
            label="Spouse's Date of Birth"
            name="spousebday"
            value={props.spousebday}
            onChange={props.handleChange}
          />
        </Col>
        <Col xs="6">
          <InputComponent
            type="text"
            label="Spouse's Last Name"
            name="spouselname"
            placeholder="Type in your spouse's last name"
            value={props.spouselname}
            onChange={props.handleChange}
          />
        </Col>
      </Row>
      <Center>
        <ToastButton tertiary label="+ Partner" />
      </Center>
      <hr />

      <Row>
        <Col xs="6">
          <InputComponent
            type="text"
            label="Child's First Name"
            placeholder="Type in your child's first name"
            value={props.childfname}
            name="childfname"
            onChange={props.handleChange}
          />
          <InputComponent
            type="date"
            label="Child's Date of Birth"
            value={props.childbday}
            name="childbday"
            onChange={props.handleChange}
          />
        </Col>
        <Col xs="6">
          <InputComponent
            type="text"
            label="Child's Last Name"
            placeholder="Type in your child's last name"
            value={props.childlname}
            name="childlname"
            onChange={props.handleChange}
          />
        </Col>
      </Row>

      <Center>
        <ToastButton tertiary label="+ Child" />
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
      <div>
        <InputComponent
          type="text"
          label="Short Term Goal (Examples: taking a vacation, buying a car)"
          placeholder="Type in a short term goal"
          value={props.shorttermgoal}
          name="shorttermgoal"
          onChange={props.handleChange}
          required
        />
      </div>
      {/* TODO: Add inputs on button click */}
      <Center>
        <ToastButton tertiary label="+ Short Term Goal" />
      </Center>

      <InputComponent
        type="text"
        label="Long Term Goal (Examples: buying a house, preparing for retirement)"
        placeholder="Type in a long term goal"
        value={props.longtermgoal}
        name="longtermgoal"
        onChange={props.handleChange}
        required
      />

      {/* TODO: Add inputs on button click */}
      <Center>
        <ToastButton tertiary label="+ Long Term Goal" />
      </Center>
      <div className="spacer-secondary"></div>
    </React.Fragment>
  );
}

export default ClientProfileContent;
