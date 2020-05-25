import React from "react";
import Style from "style-it";

import ToastEmpty from "../toast/toast-empty";
import ToastLoading from "../toast/toast-loading";

import { connect } from "react-redux";

import { setAdvisorValue, resetStep, setIsLoading } from "../../redux/actions";

import {
  getAdvisorFirstName,
  getAdvisorLastName,
  getAdvisorEmail,
  getAdvisorPhoneNumber,
  getAdvisorAddress,
  isLoading,
} from "../../redux/selectors";

import { fetchAdvisorContact } from "../../redux/actions";
class AdvisorContactContent extends React.Component {
  constructor(props) {
    super(props);

    this.props.setIsLoading(true);
    this.props.fetchAdvisorContact();
  }

  componenDidMount() {
    this.props.resetStep();
  }

  getContent() {
    if (this.props.isLoading) {
      return <ToastLoading />;
    } else if (this.props.firstName !== "" && !this.props.isLoading) {
      return (
        <div>
          <div className="entry">
            <label>Name</label>
            <p>
              {this.props.firstName} {this.props.lastName}
            </p>
          </div>

          <div className="entry">
            <label>Email</label>
            <a
              href={`mailto:${this.props.email}`}
              target="blank_"
              title="Click to email your advisor"
            >
              <p>{this.props.email}</p>
            </a>
          </div>

          <div className="entry">
            <label>Phone Number</label>
            <a
              href={`tel:${this.props.phoneNumber}`}
              title="Click to call your advisor"
            >
              <p>{this.props.phoneNumber}</p>
            </a>
          </div>

          <div className="entry">
            <label>Address</label>
            <p>{this.props.address}</p>
          </div>
        </div>
      );
    } else {
      return (
        <ToastEmpty
          header="No Advisor Information Available"
          caption="You currently aren't assigned to an advisor. You will be assigned to an advisor shortly."
        />
      );
    }
  }

  render() {
    const styles = `
    .entry {
       margin-bottom: 1.5rem;
    }

    a {
      color: var(--toast-neutral-2);
      text-decoration: underline;
    }
    `;

    return Style.it(`${styles}`, this.getContent());
  }
}

const mapStateToProps = (state) => ({
  firstName: getAdvisorFirstName(state),
  lastName: getAdvisorLastName(state),
  email: getAdvisorEmail(state),
  phoneNumber: getAdvisorPhoneNumber(state),
  address: getAdvisorAddress(state),
  isLoading: isLoading(state),
});

export default connect(mapStateToProps, {
  setAdvisorValue,
  resetStep,
  fetchAdvisorContact,
  setIsLoading,
})(AdvisorContactContent);
