import React from "react";
import Style from "style-it";

import ToastButton from "./toast/toast-button";
import ToastIcon from "./toast/toast-icon";

import { connect } from "react-redux";

import { getShowPlanReady } from "../redux/selectors";
import { toggleShowPlanReady } from "../redux/actions";

class PlanReady extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.modal = React.createRef();
  }

  getClasses() {
    let classes = ["modal"];

    if (this.props.showPlanReady) {
      this.modal.current.classList.remove("hidden");
    } else {
      classes.push("hidden");
    }

    return classes.join(" ");
  }

  closeModal() {
    this.modal.current.classList.add("hidden");
    this.props.toggleShowPlanReady();
  }

  render() {
    const styles = `
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: var(--toast-white);
      border-radius: 1rem;
      width: 45rem;
      height: 15rem;
      padding: 1rem 0;
      outline: none;
      z-index: 2;
    }

    .content-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding-bottom: 2rem;
    }

    .modal {
      position: absolute;
      width: 100vw;
      height: 100vh;
      background: var(--toast-black-transparent);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
    }

    .button {
      margin-top: 1rem;
    }

    .hidden {
      display: none;
    }

    .icon-container {
      display: flex;
      justify-content: flex-end;
      margin: 0.5rem 1.5rem;
    }

    .icon {
      cursor: pointer;
    }
    `;

    return Style.it(
      `${styles}`,
      <div ref={this.modal} className={this.getClasses()}>
        <div className="card" tabIndex="-1" onBlur={this.closeModal}>
          <div className="icon-container">
            <div className="icon" onMouseDown={this.closeModal}>
              <ToastIcon
                name="x"
                width={24}
                height={24}
                strokeWidth={2}
                stroke="var(--toast-neutral-1)"
              />
            </div>
          </div>

          <div className="content-wrapper">
            <h3>Your baseline plan is ready to view.</h3>
            <p>
              Click 'view plan' to see it or close out to personalize your plan.
            </p>
            <a href="/plan" className="button">
              <ToastButton primary round label="View Plan" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showPlanReady: getShowPlanReady(state),
});

export default connect(mapStateToProps, { toggleShowPlanReady })(PlanReady);
