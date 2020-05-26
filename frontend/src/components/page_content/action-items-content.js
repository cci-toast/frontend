import React from "react";
import Style from "style-it";

import ToastEmpty from "../toast/toast-empty";
import ToastCheckbox from "../toast/toast-checkbox";
import ToastDuplicateInputButton from "../toast/toast-duplicate-input-button";
import ToastInput from "../toast/toast-input";
import ToastToggle from "../toast/toast-toggle";

import { connect } from "react-redux";
import {
  resetStep,
  addActionItem,
  deleteActionItem,
  setActionItemListValue,
  toggleActionItem,
} from "../../redux/actions";
import { getActionItemsSorted, isLoading } from "../../redux/selectors";
import ToastLoading from "../toast/toast-loading";

class ActionItemsContent extends React.Component {
  constructor(props) {
    super(props);
    this.setActiveToggle = this.setActiveToggle.bind(this);
    this.onChange = this.onChange.bind(this);

    this.actionItems = React.createRef();
    this.advisorEdit = React.createRef();
  }

  componentDidMount() {
    this.props.resetStep();
  }

  isAdvisor() {
    return this.props.user === "advisor";
  }

  onChange(event) {
    const { name } = event.target;
    this.props.toggleActionItem(name);
  }

  getActionItems() {
    if (this.props.isLoading) {
      return <ToastLoading />;
    } else if (this.props.actionItems.length !== 0 && !this.props.isLoading) {
      return this.props.actionItems.map((actionItem) => {
        if (actionItem.description !== "") {
          return (
            <ToastCheckbox
              name={this.props.actionItems.indexOf(actionItem)}
              text={actionItem.description}
              readOnly={this.isAdvisor()}
              key={actionItem.description}
              checked={actionItem.completed}
              onChange={this.onChange}
            />
          );
        } else {
          return "";
        }
      });
    } else {
      return (
        <ToastEmpty
          header="No Action Items Available"
          caption={this.getCaption()}
        />
      );
    }
  }

  setActiveToggle(active) {
    if (
      active === "View" &&
      this.advisorEdit.current !== null &&
      this.actionItems !== null
    ) {
      this.advisorEdit.current.classList.add("hidden");
      this.actionItems.current.classList.remove("hidden");
    } else if (
      active === "Edit" &&
      this.advisorEdit.current !== null &&
      this.actionItems !== null
    ) {
      this.advisorEdit.current.classList.remove("hidden");
      this.actionItems.current.classList.add("hidden");
    }
  }

  getContent() {
    return (
      <div className="wrap">
        <div className={this.isAdvisor() ? "" : "hidden"}>
          <div className="toggle">
            <ToastToggle
              active="View"
              inactive="Edit"
              actionItems
              activeLabel={this.setActiveToggle}
            />
          </div>

          <div ref={this.advisorEdit} className="inputs hidden">
            <ToastDuplicateInputButton
              label="Add Action Item"
              fields={{ id: "", description: "", completed: false }}
              value={this.props.actionItems}
              onChange={this.props.setActionItemListValue}
              onDuplicate={this.props.addActionItem}
              onDelete={this.props.deleteActionItem}
            >
              <ToastInput
                type="text"
                label="Action Item"
                name="description"
                placeholder="Type in an action item"
                readOnly={this.props.readOnly}
                helpText="Enter an action item for your client."
              />
            </ToastDuplicateInputButton>
          </div>
        </div>

        <div className="action-items" ref={this.actionItems}>
          {this.getActionItems()}
        </div>
      </div>
    );
  }

  getCaption() {
    if (this.props.user === "client") {
      return "You currently do not have any action items. Navigate to your profile page and fill out the form to get a baseline plan and action items.";
    } else if (this.props.user === "advisor") {
      return "Your client does not have any action items yet. They have not filled out the necessary fields on their profile.";
    }
  }

  render() {
    const styles = `
    .wrap {
      height: calc(90vh - 10rem);
      overflow: auto;
    }

    .action-items {
      display: flex;
      flex-direction: column;
    }

    .toggle {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 1rem;
    }

    .hidden {
      display: none;
    }
    `;

    return Style.it(`${styles}`, this.getContent());
  }
}

const mapStateToProps = (state) => ({
  actionItems: getActionItemsSorted(state),
  isLoading: isLoading(state),
});

export default connect(mapStateToProps, {
  resetStep,
  addActionItem,
  deleteActionItem,
  setActionItemListValue,
  toggleActionItem,
})(ActionItemsContent);
