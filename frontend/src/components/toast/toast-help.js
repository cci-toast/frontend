import React from "react";
import Style from "style-it";

import ToastIcon from "./toast-icon";
import ToastButton from "./toast-button";

import {
  clientProfile,
  clientPlan,
  clientActionItems,
  advisorClientProfile,
  advisorClientActionItems,
  advisorClientPlan,
  advisorClients,
  advisorConfiguration,
  clientAdvisorContact,
} from "../../utils/help-utils";

class ToastSaveCancel extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.modal = React.createRef();
    this.card = React.createRef();
  }

  closeModal() {
    this.modal.current.classList.add("hidden");
  }

  openModal() {
    this.modal.current.classList.remove("hidden");
    this.card.current.focus();
  }

  getText() {
    if (this.props.user === "client") {
      switch (this.props.page) {
        case "profile":
          return clientProfile.map((p) => <p>{p}</p>);
        case "plan":
          return clientPlan.map((p) => <p>{p}</p>);
        case "actionitems":
          return clientActionItems.map((p) => <p>{p}</p>);
        case "advisorcontact":
          return clientAdvisorContact.map((p) => <p>{p}</p>);
        default:
          return <p></p>;
      }
    } else if (this.props.user === "advisor") {
      switch (this.props.page) {
        case "profile":
          return advisorClientProfile.map((p) => <p>{p}</p>);
        case "plan":
          return advisorClientPlan.map((p) => <p>{p}</p>);
        case "actionitems":
          return advisorClientActionItems.map((p) => <p>{p}</p>);
        case "configuration":
          return advisorConfiguration.map((p) => <p>{p}</p>);
        case "clients":
          return advisorClients.map((p) => <p>{p}</p>);
        default:
          return <p></p>;
      }
    }
    return;
  }
  render() {
    const styles = `
    .icon {
        position: absolute;
        top: 1rem;
        right: 3rem;
        cursor: pointer;
    }

    .card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        background-color: var(--toast-white);
        border-radius: 1rem;
        width: 45rem;
        height: 30rem;
        padding: 1rem 0;
        outline: none;
    }

    .modal {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: var(--toast-black-transparent);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hidden {
        visibility: hidden;
    }

    .text {
        align-self: flex-start;
        margin: 2rem;
    }

    p {
        margin-bottom: 1.5rem;
    }
    `;

    return Style.it(
      `${styles}`,
      <div>
        <div className="icon" onClick={this.openModal}>
          <ToastIcon
            name="helpcircle"
            width={24}
            height={24}
            stroke="var(--toast-neutral-1)"
            strokeWidth={2}
          />
        </div>

        <div ref={this.modal} className="modal hidden">
          <div
            ref={this.card}
            className="card"
            tabIndex="-1"
            onBlur={this.closeModal}
          >
            <div className="text">{this.getText()}</div>
            <ToastButton
              secondary
              type="button"
              label="OK"
              handleClick={this.closeModal}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ToastSaveCancel;
