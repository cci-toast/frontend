import React, { Component } from "react";
//import Select from "react-select";

import TertiaryButton from "../Components/TertiaryButton";
import { Row, Col } from "reactstrap";
import Center from "react-center";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";
import QuaternaryButton from "../Components/QuaternaryButton";
import "../../index.css";
import TextInput from "../Components/TextInput";
import DateInput from "../Components/DateInput";
import CurrencyInput from "../Components/CurrencyInput";

class ClientProfile extends Component {
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
    if (currentStep === 6) {
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
        <form onSubmit={this.handleSubmit}>
          <ClientInformation
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            fname={this.state.fname}
            lname={this.state.lname}
            bday={this.state.bday}
            city={this.state.city}
            state={this.state.state}
            zipcode={this.state.zipcode}/>
          <Finances
            currentStep={this.state.currentStep}
            handleChange={this.handleChange} 
            income={this.state.income}/>
          <Bills
            currentStep={this.state.currentStep}
            handleChange={this.handleChange} />
          <Expenses
            currentStep={this.state.currentStep}
            handleChange={this.handleChange} 
            shoppingdescription={this.state.shoppingdescription}
            shoppingamount={this.state.shoppingamount}/>
          <FamilyInformation
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            spousefname={this.state.spousefname}
            spouselname={this.state.spouselname}
            spousebday={this.state.spousebday}
            numchildren={this.state.numchildren}
            childfname={this.state.childfname}
            childlname={this.state.childlname}
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
          <TextInput label="First Name" placeholder="Type in your first name" value={props.fname} name="fname" onChange={props.handleChange} />
          <DateInput label="Date of Birth" value={props.bday} name="bday" onChange={props.handleChange} />
          <TextInput label="State" placeholder="Type in your state" value={props.state} name="state" onChange={props.handleChange} />
        </Col>

        <Col xs="6">
          <TextInput label="Last Name" placeholder="Type in your last name" value={props.lname} name="lname" onChange={props.handleChange} />
          <TextInput label="City" placeholder="Type in your city" value={props.city} name="city" onChange={props.handleChange} />
          <TextInput label="Zip Code" placeholder="Type in your zip-code" value={props.zipcode} name="zipcode" pattern="[0-9]*" onChange={props.handleChange} />
        </Col>
      </Row>
      <div className="spacer-tertiary" ></div>
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
          <CurrencyInput label="Annual Salary Before Taxes" placeholder="Type in your annual household income" value={props.income} name="income" onChange={props.handleChange}/>
          </div>
        </Col>
      </Row>
      <Center>
        <TertiaryButton label="+ Additional Income" />
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
  return (
    <div>
      <h5>Expenses</h5>

      <Row>
        <Col xs="6">
          <TextInput label="Shopping Description" name="shoppingdescription" placeholder="Type in your shopping description." value={props.shoppingdescription}  onChange={props.handleChange}/>
        </Col>

        <Col xs="6">
          <CurrencyInput label="Shopping Amount" name="shoppingamount" placeholder="Type in the amount spent on shopping items." value={props.shoppingamount} onChange={props.handleChange}/>
        </Col>
      </Row>
      <br />
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
          <TextInput label="Spouse's First Name" name="spousefname" placeholder="Type in your spouse's first name" value={props.spousefname}  onChange={props.handleChange}/>
          <DateInput label="Spouse's Date of Birth" name="spousebday" value={props.spousebday} onChange={props.handleChange} />
        </Col>
        <Col xs="6">
        <TextInput label="Spouse's Last Name" name="spouselname" placeholder="Type in your spouse's last name" value={props.spouselname} onChange={props.handleChange}/>
        </Col>
      </Row>
      <Center>
        <TertiaryButton label="+ Partner" />
      </Center>
      <hr />

      <Row>
        <Col xs="6">
        <TextInput label="Child's First Name" placeholder="Type in your child's first name" value={props.childfname} name="childfname" onChange={props.handleChange}/>
        <DateInput label="Child's Date of Birth" value={props.childbday} name="childbday" onChange={props.handleChange} />
        </Col>
        <Col xs="6">
        <TextInput label="Child's Last Name" placeholder="Type in your child's last name" value={props.childlname} name="childlname" onChange={props.handleChange} />
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

        <div className="required">
        <TextInput label="Short Term Goal (Examples: taking a vacation, buying a car)" placeholder="Type in a short term goal" value={props.shorttermgoal} name="shorttermgoal" onChange={props.handleChange} />
        </div>
       {/* TODO: Add inputs on button click */}
        <Center>
          <TertiaryButton label="+ Short Term Goal" />
        </Center>
        <div className="required">
        <TextInput label="Long Term Goal (Examples: buying a house, preparing for retirement)" placeholder="Type in a long term goal" value={props.longtermgoal} name="longtermgoal" onChange={props.handleChange} />
        </div>

        {/* TODO: Add inputs on button click */}
        <Center>
          <TertiaryButton label="+ Long Term Goal" />
        </Center>
        <div className="spacer-secondary" ></div>

    </React.Fragment>
  );
}

export default ClientProfile;