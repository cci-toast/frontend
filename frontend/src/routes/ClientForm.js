import React, { Component } from "react";
import Select from "react-select";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Values for Marital Status select box
const maritalStatus = [
  { label: "Single", value: 1 },
  { label: "In a relationship", value: 2 },
  { label: "Engaged", value: 3 },
  { label: "Married", value: 4 },
  { label: "Divorced", value: 5 },
  { label: "Widow/Widower", value: 6 }
];

class ClientForm extends Component {
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
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
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
        <button
          className="btn blue-purple-gradient float-left white-text"
          type="submit"
          onClick={this.prev}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Previous{" "}
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn blue-purple-gradient float-right white-text"
          type="submit"
          onClick={this.next}
        >
          {" "}
          Next <FontAwesomeIcon icon={faArrowRight} />
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <main className="section sc-bdVaJa bWcVOO">
        <h4 className="black-text" style={{ fontWeight: "bold" }}>
          Your Profile{" "}
        </h4>
        <p>
          Please fill out the information to generate your financial plan and
          action items.
        </p>
        <React.Fragment>
          {/* <p>Step {this.state.currentStep} </p>*/}
          {/*Renders the form steps and passes required props in*/}
          <form onSubmit={this.handleSubmit}>
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              fname={this.state.fname}
              lname={this.state.lname}
              bday={this.state.bday}
              income={this.state.income}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              spousename={this.state.spousename}
              spousebday={this.state.spousebday}
              numchildren={this.state.numchildren}
              childname={this.state.childname}
              childbday={this.state.childbday}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              password={this.state.password}
            />
            {this.previousButton()}
            {this.nextButton()}
          </form>
        </React.Fragment>
      </main>
    );
  }
}

//Step 1: Client Information
function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group required">
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

      <div className="required">
        <label className="control-label">Household Annual Income</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon">
              ${" "}
            </span>
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
    </div>
  );
}

//Step 2: Family Information
function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-group required">
      <label className="control-label"> Marital Status </label>
      <Select
        options={maritalStatus}
        name="maritalstatus"
        placeholder="Select a marital status..."
      />

      <div className="form-group required">
        <label className="control-label">Spouse's Name</label>
        <div className="input-group">
          <input
            type="name"
            className="form-control"
            name="spousename"
            placeholder="Type in your spouse's name"
            value={props.spousename}
            onChange={props.handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group required">
        <label className="control-label">Spouse's Date of Birth</label>
        <div className="input-group">
          <input
            type="date"
            className="form-control"
            name="spousebday"
            value={props.spousebday}
            onChange={props.handleChange}
            required
          />
        </div>
      </div>

      <div className="required">
        <label className="control-label">Number of Children</label>
        <div className="input-group">
          <input
            type="number"
            className="form-control"
            name="numchildren"
            placeholder="Type in the number of children you have"
            min="0"
            value={props.numchildren}
            onChange={props.handleChange}
            required
          />
        </div>
      </div>

      {/*TODO: Duplicate these fields (name, dob) based on number of children typed in*/}
      <label className="black-text">Child Name</label>
      <div className="input-group">
        <input
          type="name"
          className="form-control"
          name="childname"
          placeholder="Type in your child's name"
          value={props.childname}
          onChange={props.handleChange}
        />
      </div>

      <label className="black-text">Child's Date of Birth</label>
      <div className="input-group">
        <input
          type="date"
          className="form-control"
          name="childbday"
          value={props.childbday}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}

//Step 3: Goals
function Step3(props) {
  if (props.currentStep !== 3) {
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
              required
            />
          </div>
        </div>
        <button
          className="btn blue-purple-gradient white-text"
          style={{ marginTop: "20px" }}
          type="button"
        >
          {" "}
          + Add Short Term Goal{" "}
        </button>

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
              required
            />
          </div>
        </div>

        {/* TODO: Add inputs on button click */}
        <button
          className="btn blue-purple-gradient white-text"
          style={{ marginTop: "20px" }}
          type="button"
        >
          {" "}
          + Add Long Term Goal{" "}
        </button>

        <br />
        {/* TODO: Add inputs on button click */}
        <button
          className="btn blue-purple-gradient float-right white-text"
          style={{ marginTop: "20px" }}
          type="submit"
        >
          {" "}
          Save{" "}
        </button>
      </div>
    </React.Fragment>
  );
}

export default ClientForm;
