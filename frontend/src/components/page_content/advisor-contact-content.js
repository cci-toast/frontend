import React from "react";
import Style from "style-it";

import { connect } from "react-redux";

import { setAdvisorValue, resetStep } from "../../redux/actions";

import {
  getAdvisorFirstName,
  getAdvisorLastName,
  getAdvisorEmail,
  getAdvisorPhoneNumber,
  getAdvisorAddress,
} from "../../redux/selectors";

class AdvisorContactContent extends React.Component {
  componenDidMount() {
    this.props.resetStep();
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

    return Style.it(
      `${styles}`,
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
  }
}

const mapStateToProps = (state) => ({
  firstName: getAdvisorFirstName(state),
  lastName: getAdvisorLastName(state),
  email: getAdvisorEmail(state),
  phoneNumber: getAdvisorPhoneNumber(state),
  address: getAdvisorAddress(state),
});

export default connect(mapStateToProps, {
  setAdvisorValue,
  resetStep,
})(AdvisorContactContent);
