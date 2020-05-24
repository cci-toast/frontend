import React from "react";

import EmergencySavings from "../page_content/configuration/emergency-savings";
import Protection from "../page_content/configuration/protection";
import Debt from "../page_content/configuration/debt";
import Retirement from "../page_content/configuration/retirement";
import Budgeting from "../page_content/configuration/budgeting";
import ToastLoading from "../toast/toast-loading";

import { resetStep, setIsLoading } from "../../redux/actions";
import { isLoading } from "../../redux/selectors";
import { connect } from "react-redux";

class ConfigurationContent extends React.Component {
  componentDidMount() {
    this.props.resetStep();
  }

  getContent() {
    if (this.props.isLoading) {
      return <ToastLoading />;
    } else {
      return (
        <React.Fragment>
          <EmergencySavings currentStep={this.props.currentStep} />
          <Protection currentStep={this.props.currentStep} />
          <Debt currentStep={this.props.currentStep} />
          <Retirement currentStep={this.props.currentStep} />
          <Budgeting currentStep={this.props.currentStep} />
        </React.Fragment>
      );
    }
  }

  render() {
    return this.getContent();
  }
}

const mapStateToProps = (state) => ({
  isLoading: isLoading(state),
});

export default connect(mapStateToProps, { resetStep, setIsLoading })(
  ConfigurationContent
);
